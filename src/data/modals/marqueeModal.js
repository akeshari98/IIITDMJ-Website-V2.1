const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Marquee = sequelize.define('Marquee', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Marquee;
