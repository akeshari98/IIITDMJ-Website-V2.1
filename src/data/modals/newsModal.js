const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const News = sequelize.define('News', {
  title: DataTypes.STRING,
  excerpt: DataTypes.TEXT,
  content: DataTypes.TEXT,
  image_url: DataTypes.STRING,
  link: DataTypes.STRING,
  
});

module.exports = News;
