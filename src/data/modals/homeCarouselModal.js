const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Adjust the path as necessary

const Carousel = sequelize.define('Carousel', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtext: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Carousel;
