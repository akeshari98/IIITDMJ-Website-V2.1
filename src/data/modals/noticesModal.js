const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Notices = sequelize.define('Notices', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  excerpt: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Notices;
