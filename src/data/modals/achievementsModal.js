const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Achievements = sequelize.define('achievements', {
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
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Achievements;
