const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "my_user", // Replace with your PostgreSQL username
  password: "user123", // Replace with your PostgreSQL password
  database: "website_v2", // Replace with your PostgreSQL database name
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
