const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const RedAnnouncements = sequelize.define('RedAnnouncements', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = RedAnnouncements;
