require('dotenv').config();
const pool = require("../connection");

const getAllHostelMembers = async (req, res) => {
    try {
      const query = `
        SELECT id, name, role, href
        FROM hostels
        ORDER BY id;
      `;
      // console.log(res);
      const result = await pool.query(query);
      return res.json(result.rows); // Ensure res is used directly here
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server error" });
    }
  };
  
const addHostelMembers = async ({ name, role, href }) => {
    const query = `
      INSERT INTO hostels (name, role, href)
      VALUES ($1, $2, $3);
    `;
    await pool.query(query, [name, role, href]);
  };
  
  // Update an existing non-faculty member's information
  const updateHostelMembers = async ({ id, name, role, href }) => {
    const query = `
      UPDATE hostels
      SET 
          name = $2,
          role = $3,
          href = $4
      WHERE id = $1;
    `;
    await pool.query(query, [id, name, role, href]);
  };
  
  // Delete a non-faculty member
  const deleteHostelMembers = async (id) => {
    const query = `
      DELETE FROM hostels
      WHERE id = $1;
    `;
    await pool.query(query, [id]);
  };
  module.exports = {
    deleteHostelMembers,
    addHostelMembers,
    updateHostelMembers,
    getAllHostelMembers
  }