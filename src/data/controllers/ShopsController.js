require('dotenv').config();
const pool = require("../connection");

const getAllShops = async (req, res) => {
    try {
      const query = `
        SELECT id, name, owner, contact, location
        FROM shops
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
  
const addShops = async ({ name, owner, contact, location }) => {
    const query = `
      INSERT INTO shops (name, owner, contact, location)
      VALUES ($1, $2, $3, $4);
    `;
    await pool.query(query, [name, owner, contact, location]);
  };
  
  // Update an existing non-faculty member's information
  const updateShops = async ({ id, name, owner, contact, location }) => {
    const query = `
      UPDATE shops
      SET 
          name = $2,
          owner = $3,
          contact = $4,
          location = $5
      WHERE id = $1;
    `;
    await pool.query(query, [id, name, owner, contact, location]);
  };
  
  // Delete a non-faculty member
  const deleteShops = async (id) => {
    const query = `
      DELETE FROM shops
      WHERE id = $1;
    `;
    await pool.query(query, [id]);
  };
  module.exports = {
    deleteShops,
    addShops,
    updateShops,
    getAllShops
  }