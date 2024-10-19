const express = require("express"); // for the server
const bodyParser = require("body-parser"); // for parsing and reading json data
const cors = require("cors");
const pool = require("./connection"); // Import the PostgreSQL pool from db.js

const server = express(); // starting the server

server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(bodyParser.json()); // using the body-parser
server.use(cors()); // using cors to prevent the CORS error

const port = 5000;
server.listen(port, () => {
  console.log("server started at localhost " + port);
});

// Test connection to PostgreSQL
server.get("/test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()"); // Simple query to test connection
    res.json({ connection: true, server_time: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ connection: false, error: error.message });
  }
});

// Use the routes for each section
// server.use("/feedbacks", require("./routes/feedbacks"));
// server.use("/students", require("./routes/students"));
// server.use("/faculties", require("./routes/faculty"));
// server.use("/departments", require("./routes/departments"));
// server.use("/admin", require("./routes/admin"));
server.use("/people", require("./routes/people"));
server.use("/links", require("./routes/links"));
// server.use("/financecommittee", require("./routes/financecommittee"));
// server.use("/generaladministration", require("./routes/generaladministration"));
// server.use("/otheradministration", require("./routes/otheradministration"));

