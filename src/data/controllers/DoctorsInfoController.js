require('dotenv').config();
const pool = require("../connection");

const getAllDoctors = async (req, res) => {
    try {
      const query = `
        SELECT id, name, role
        FROM doctors
        ORDER BY name ASC;
      `;
      // console.log(res);
      const result = await pool.query(query);
      return res.json(result.rows); // Ensure res is used directly here
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  
const addDoctorsInfo = async ({ name, role }) => {
    const query = `
      INSERT INTO doctors (name, role)
      VALUES ($1, $2);
    `;
    await pool.query(query, [name, role]);
  };
  
  // Update an existing non-faculty member's information
  const updateDoctorsInfo = async ({ id, name, role }) => {
    const query = `
      UPDATE doctors
      SET 
          name = $2,
          role = $3
      WHERE id = $1;
    `;
    await pool.query(query, [id, name, role]);
  };
  
  // Delete a non-faculty member
  const deleteDoctorsInfo = async (id) => {
    const query = `
      DELETE FROM doctors
      WHERE id = $1;
    `;
    await pool.query(query, [id]);
  };
  module.exports = {
    deleteDoctorsInfo,
    addDoctorsInfo,
    updateDoctorsInfo,
    getAllDoctors
  }