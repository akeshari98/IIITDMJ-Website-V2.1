const express = require("express");
const pool = require("../connection");
const router = express.Router();

// Utility function to get committee data
const withAddress = async (committee, res) => {
  try {
    const query = `
      (SELECT t.id, first_name, last_name, address, phone_no, profile_picture, role,imp, COALESCE(t.email, p.email) AS email
      FROM 
          dblink('dbname=fusionlab user=my_user password=user123', 
              'SELECT auth_user.id, first_name, last_name, email, address, phone_no, profile_picture FROM auth_user, globals_extrainfo, globals_faculty 
              WHERE auth_user.id=globals_extrainfo.user_id 
              AND globals_extrainfo.id=globals_faculty.id_id') AS t(id int, first_name varchar, last_name varchar, email varchar, address text, phone_no bigint, profile_picture varchar)
      JOIN 
          faculty_positions p ON t.id=p.id
      WHERE position_type=$1)
      UNION
      (SELECT p.id, first_name, last_name, address, phone_no, profile_picture, role, imp, COALESCE(p.email, pos.email) AS email
      FROM 
          non_faculty_info p
      JOIN 
          non_faculty_positions pos ON p.id=pos.id
      WHERE position_type=$1)
      ORDER BY imp ASC;
    `;
      
    const result = await pool.query(query, [committee]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const withoutAddress = async (committee, res) => {
  try {
    const query = `
      (SELECT t.id, first_name, last_name, phone_no, profile_picture, role,imp, COALESCE(t.email, p.email) AS email
      FROM 
          dblink('dbname=fusionlab user=my_user password=user123', 
              'SELECT auth_user.id, first_name, last_name, email, phone_no, profile_picture FROM auth_user, globals_extrainfo, globals_faculty 
              WHERE auth_user.id=globals_extrainfo.user_id 
              AND globals_extrainfo.id=globals_faculty.id_id') AS t(id int, first_name varchar, last_name varchar, email varchar, phone_no bigint, profile_picture varchar)
      JOIN 
          faculty_positions p ON t.id=p.id
      WHERE position_type=$1)
      UNION
      (SELECT p.id, first_name, last_name, phone_no, profile_picture, role, imp, COALESCE(p.email, pos.email) AS email
      FROM 
          non_faculty_info p
      JOIN 
          non_faculty_positions pos ON p.id=pos.id
      WHERE position_type=$1)
      ORDER BY imp ASC;
    `;
    const result = await pool.query(query, [committee]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const professors = async (res) => {
  try {
    const query = `
      SELECT p.id, first_name, last_name, address, phone_no, profile_picture, COALESCE(p.email, pos.email) AS email
      FROM 
          dblink('dbname=fusionlab user=my_user password=user123', 
              'SELECT auth_user.id, first_name, last_name, email, address, phone_no, profile_picture 
              FROM auth_user, globals_extrainfo, globals_faculty 
              WHERE auth_user.id=globals_extrainfo.user_id 
              AND globals_extrainfo.id=globals_faculty.id_id 
              AND first_name LIKE ''Prof.%'' ') 
          AS p(id int, first_name varchar, last_name varchar, email varchar, address text, phone_no bigint, profile_picture varchar)
      LEFT JOIN 
          faculty_positions pos ON p.id = pos.id
      WHERE 
          NOT EXISTS (
              SELECT 1 
              FROM faculty_positions pos2 
              WHERE pos2.id = p.id 
              AND pos2.position_type IN ('dean', 'hod', 'director')
          )
      ORDER BY 
          p.first_name;
    `;
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

router.get("/boardofgoverners", (req, res) => { withAddress('board_of_governors', res); })
router.get("/financecommittee", (req, res) => { withAddress('finance_committee', res); })
router.get("/buildingworks", (req, res) => { withAddress('building_works', res); })
router.get("/special", (req, res) => { withAddress('senate_special', res); })

router.get("/director", (req, res) => { withoutAddress('director', res); })
router.get("/deans", (req, res) => { withoutAddress('dean', res); })
router.get("/hods", (req, res) => { withoutAddress('hod', res); })
router.get("/registrar", (req, res) => { withoutAddress('registrar', res); })
router.get("/cc", (req, res) => { withoutAddress('councelling_cell', res); })
router.get("/tp", (req, res) => { withoutAddress('training&placement', res); })
router.get("/iic", (req, res) => { withoutAddress('IIC', res); })
router.get("/alumni", (req, res) => { withoutAddress('alumni_cell', res); })
router.get("/comm", (req, res) => { withoutAddress('communication_cell', res); })
router.get("/audit", (req, res) => { withoutAddress('audit', res); })
router.get("/cpio", (req, res) => { withoutAddress('CPIO', res); })
router.get("/rspc", (req, res) => { withoutAddress('RSPC', res); })
router.get("/academics", (req, res) => { withoutAddress('academics', res); })
router.get("/registrar_f&a", (req, res) => { withoutAddress('registrar_f&a', res); })
router.get("/profs", (req, res) => { professors(res); })



module.exports = router;


