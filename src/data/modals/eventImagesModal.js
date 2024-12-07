const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Assuming you have sequelize instance in sequelize.js
const Event = require('./eventsModal')
const EventImage = sequelize.define('eventImage', {
  image_path: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Define the relationship (Event has many images)
EventImage.belongsTo(Event, {
  foreignKey: 'event_id',
  as: 'event'
});

module.exports = EventImage;
