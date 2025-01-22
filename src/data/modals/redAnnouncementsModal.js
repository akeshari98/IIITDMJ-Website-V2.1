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
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'ACTIVE',
    validate: {
      isIn: [['ACTIVE', 'ARCHIVED', 'CANCELLED']]
    }
  },
});

module.exports = RedAnnouncements;
