require("dotenv").config();
const pool = require("../connection");

const getAllPositions = async (req, res, { position_type }) => {
  try {
    const query = `
        (SELECT t.id, user_type, first_name, last_name, p.email, address, phone_no, profile_picture, role, imp
        FROM 
            dblink('dbname=fusionlab user=superAdmin password=9455957884', 
                'SELECT auth_user.id, user_type, first_name, last_name, email, address, phone_no, profile_picture FROM auth_user, globals_extrainfo, globals_faculty 
                WHERE auth_user.id=globals_extrainfo.user_id 
                AND globals_extrainfo.id=globals_faculty.id_id') AS t(id int, user_type varchar, first_name varchar, last_name varchar, email varchar, address text, phone_no bigint, profile_picture varchar)
        JOIN 
            faculty_positions p ON t.id=p.id
        WHERE position_type=$1)
        UNION
        (SELECT p.id, user_type, first_name, last_name, pos.email, address, phone_no, profile_picture, role, imp
        FROM 
            non_faculty_info p
        JOIN 
            non_faculty_positions pos ON p.id=pos.id
        WHERE position_type=$1)
        ORDER BY imp ASC, first_name ASC;
        `;
    // console.log(res);
    const result = await pool.query(query, [position_type]);
    return res.json(result.rows); // Ensure res is used directly here
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

const addPositions = async ({ id, role, imp, email, isFaculty, position_type }) => {
    let query = '';
    if (isFaculty === 1) {
      query = `
        INSERT INTO faculty_positions (id, position_type, role, imp, email)
        VALUES ($1, $2, $3, $4, $5);
      `;
    } else {
      query = `
        INSERT INTO non_faculty_positions (id, position_type, role, imp, email)
        VALUES ($1, $2, $3, $4, $5);
      `;
    }
  
    await pool.query(query, [id, position_type, role, imp, email]); // Corrected parameter order
  };
  

// Update an existing non-faculty member's information
const updatePositions = async ({ id, role, imp, email, isFaculty, position_type }) => {
    let query=``;
    if (isFaculty === 1) {
        query = `
              UPDATE faculty_positions
                SET 
                    role = $2,
                    imp = $3,
                    email = $4
                WHERE id = $1
                AND position_type=$5;
            `;
      } else {
        query = `
              UPDATE non_faculty_positions
                SET 
                    role = $2,
                    imp = $3,
                    email = $4
                WHERE id = $1
                AND position_type=$5;
            `;
      }
  await pool.query(query, [id, role, imp, email, position_type]);
};

// Delete a non-faculty member
const deletePositions = async (id, isFaculty, position_type) => {
    let query = ``;
    if (isFaculty === 1) {
      query = `
        DELETE FROM faculty_positions
        WHERE id = $1
        AND position_type = $2
      `;
    } else {
      query = `
        DELETE FROM non_faculty_positions
        WHERE id = $1
        AND position_type = $2
      `;
    }
    await pool.query(query, [id, position_type]);
  };
  
module.exports = {
  deletePositions,
  addPositions,
  updatePositions,
  getAllPositions,
};
