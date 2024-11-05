const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Achievements = sequelize.define('achievements', {
  title: DataTypes.STRING,
  excerpt: DataTypes.TEXT,
  content: DataTypes.TEXT,
  image_url: DataTypes.STRING,
  link: DataTypes.STRING,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Achievements;
