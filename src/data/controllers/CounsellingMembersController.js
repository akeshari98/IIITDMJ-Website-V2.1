require('dotenv').config();
const pool = require("../connection");

const getAllCounsellingMembers = async (req, res) => {
    try {
      const query = `
        SELECT id, name, roll_no, role, batch, email
        FROM counselling
        ORDER BY role ASC, name ASC;
      `;
      // console.log(res);
      const result = await pool.query(query);
      return res.json(result.rows); // Ensure res is used directly here
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  
const addCounsellingMembers = async ({ name, roll_no, role, batch, email }) => {
    const query = `
      INSERT INTO counselling (name, roll_no, role, batch, email)
      VALUES ($1, $2, $3, $4, $5);
    `;
    await pool.query(query, [name, roll_no, role, batch, email]);
  };
  
  // Update an existing non-faculty member's information
  const updateCounsellingMembers = async ({ id, name, roll_no, role, batch, email }) => {
    const query = `
      UPDATE counselling
      SET 
          name = $2,
          roll_no=$3,
          role = $4,
          batch=$5,
          email=$6
      WHERE id = $1;
    `;
    await pool.query(query, [id, name, roll_no, role, batch, email]);
  };
  
  // Delete a non-faculty member
  const deleteCounsellingMembers = async (id) => {
    const query = `
      DELETE FROM counselling
      WHERE id = $1;
    `;
    await pool.query(query, [id]);
  };
  module.exports = {
    deleteCounsellingMembers,
    addCounsellingMembers,
    updateCounsellingMembers,
    getAllCounsellingMembers
  }