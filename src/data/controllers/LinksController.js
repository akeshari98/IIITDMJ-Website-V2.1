require("dotenv").config();
const pool = require("../connection");

const getAllLinks = async (req, res, { link_type }) => {
  try {
    const query = `
        SELECT id, name, href
        FROM ${link_type}
        ORDER BY id DESC;
        `;
    const result = await pool.query(query, []);
    return res.json(result.rows); // Ensure res is used directly here
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

  const addLinks = async ({ name, href, link_type }) => {
    const  query =`
            INSERT INTO ${link_type} (name, href)
            VALUES ($1, $2);
        `;
    await pool.query(query, [name, href]); // Corrected parameter order
  };
  

  const updateLinks = async ({ id, name, href, link_type }) => {
    const query = `
            UPDATE ${link_type}
            SET 
                name = $2,
                href = $3
            WHERE id = $1;
          `;
  await pool.query(query, [id, name, href]);
};


const deleteLinks = async ({ id, link_type }) => {
    const query = `
            DELETE FROM ${link_type}
            WHERE id = $1;
          `;
  await pool.query(query, [id]);
};


// Delete a non-faculty member
// const deleteLinks = async (req, res, { id, link_type }) => {
//     try {
//       const query = `
//             DELETE FROM "${link_type}"
//             WHERE id = $1;
//           `;
//       const result = await pool.query(query, [id]);
//       return res.json(result.rows); // Ensure res is used directly here
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Server error" });
//     }
//   };
  
module.exports = {
  deleteLinks,
  addLinks,
  updateLinks,
  getAllLinks,
};
