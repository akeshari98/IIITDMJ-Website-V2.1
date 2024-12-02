const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Adjust the path as necessary

const Carousel = sequelize.define('Carousel', {
  title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  subtext: {
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

module.exports = Carousel;
