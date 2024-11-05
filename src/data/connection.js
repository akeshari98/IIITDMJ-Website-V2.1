const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "superAdmin", // Replace with your PostgreSQL username
  password: "9455957884", // Replace with your PostgreSQL password
  database: "IIITDMJ", // Replace with your PostgreSQL database name
  port: 5432, // Default PostgreSQL port
});
module.exports = pool;