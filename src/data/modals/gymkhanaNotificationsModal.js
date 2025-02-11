const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const GymkhanaNotification = sequelize.define('GymkhanaNotification', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'ACTIVE',
    validate: {
      isIn: [['ACTIVE', 'ARCHIVED', 'CANCELLED']]
    }
  },
});

module.exports = GymkhanaNotification;