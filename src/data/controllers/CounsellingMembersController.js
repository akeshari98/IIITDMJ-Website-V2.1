require('dotenv').config();
const pool = require("../connection");

const getAllCounsellingMembers = async (req, res) => {
  try {
    const query = `
      SELECT id, name, roll_no, role, batch, email, student_type
      FROM counselling
      ORDER BY role ASC, name ASC;
    `;
    const result = await pool.query(query);
    return res.json(result.rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};

const addCounsellingMembers = async ({ name, roll_no, role, batch, email, student_type }) => {
  const query = `
    INSERT INTO counselling (name, roll_no, role, batch, email, student_type)
    VALUES ($1, $2, $3, $4, $5, $6);
  `;
  await pool.query(query, [name, roll_no, role, batch, email, student_type]);
};

const bulkAddCounsellingMembers = async (members) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const insertQuery = `
      INSERT INTO counselling (name, roll_no, role, batch, email, student_type)
      VALUES ($1, $2, $3, $4, $5, $6);
    `;

    for (const member of members) {
      await client.query(insertQuery, [
        member.name,
        member.roll_no,
        member.role,
        member.batch,
        member.email,
        member.student_type
      ]);
    }

    await client.query('COMMIT');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

const updateCounsellingMembers = async ({ id, name, roll_no, role, batch, email, student_type }) => {
  const query = `
    UPDATE counselling
    SET 
      name = $2,
      roll_no = $3,
      role = $4,
      batch = $5,
      email = $6,
      student_type = $7
    WHERE id = $1;
  `;
  await pool.query(query, [id, name, roll_no, role, batch, email, student_type]);
};

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
  getAllCounsellingMembers,
  bulkAddCounsellingMembers
};

