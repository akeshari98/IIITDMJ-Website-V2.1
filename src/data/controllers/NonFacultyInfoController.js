require('dotenv').config();
const pool = require("../connection");

const getAllNonFaculty = async (req, res) => {
    try {
      const query = `
        SELECT id,first_name, last_name, email, address, phone_no, profile_picture
        FROM non_faculty_info
        ORDER BY first_name ASC;
      `;
      // console.log(res);
      const result = await pool.query(query);
      return res.json(result.rows); // Ensure res is used directly here
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  
const addNonFacultyInfo = async ({ first_name, last_name, email, address, phone_no, profile_picture }) => {
    const query = `
      INSERT INTO non_faculty_info (first_name, last_name, email, address, phone_no, profile_picture)
      VALUES ($1, $2, $3, $4, $5, $6);
    `;
    await pool.query(query, [first_name, last_name, email, address, phone_no, profile_picture]);
  };
  
  // Update an existing non-faculty member's information
  const updateNonFacultyInfo = async ({ id, first_name, last_name, email, address, phone_no, profile_picture }) => {
    const query = `
      UPDATE non_faculty_info
      SET 
          first_name = $2,
          last_name = $3,
          email = $4,
          address = $5,
          phone_no = $6,
          profile_picture = $7
      WHERE id = $1;
    `;
    await pool.query(query, [id, first_name, last_name, email, address, phone_no, profile_picture]);
  };
  
  // Delete a non-faculty member
  const deleteNonFacultyInfo = async (id) => {
    const query = `
      DELETE FROM non_faculty_info
      WHERE id = $1;
    `;
    await pool.query(query, [id]);
  };
  module.exports = {
    deleteNonFacultyInfo,
    addNonFacultyInfo,
    updateNonFacultyInfo,
    getAllNonFaculty
  }