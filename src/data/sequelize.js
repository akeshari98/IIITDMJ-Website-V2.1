const { Sequelize } = require('sequelize');

// Sequelize instance
const sequelize = new Sequelize('website_v2', 'my_user', 'user123', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,           // Maximum number of connections
    min: 0,           // Minimum number of connections
    acquire: 30000,   // Maximum time (in ms) to acquire a connection
    idle: 10000       // Maximum idle time (in ms) before releasing connection
  }
});

module.exports = sequelize;
