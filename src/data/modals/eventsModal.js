const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Assuming you have sequelize instance in sequelize.js

const Event = sequelize.define('event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  external_link: {
    type: DataTypes.STRING,
  },
  cover_image: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  }
});

module.exports = Event;
