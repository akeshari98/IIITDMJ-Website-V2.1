var mysql = require("mysql2");

var pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "user@123",
  database: "IIITDMJ",
  multipleStatements: true,
});
module.exports = pool;

// var pool = mysql.createPool({
//   host: "sql.freedb.tech",
//   user: "freedb_ask_developers",
//   password: "nEy%P*St5Y$cbFH",
//   database: "freedb_G-Campus",
// });
