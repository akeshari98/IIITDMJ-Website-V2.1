const { Model, DataTypes, Op } = require('sequelize');
const sequelize = require('../sequelize');

class Calendar extends Model {}

Calendar.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  calendar_no: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  closing_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'ACTIVE',
    validate: {
      isIn: [['ACTIVE', 'ARCHIVED', 'CANCELLED']]
    }
  },
  attachments: {
    type: DataTypes.JSONB, // Using JSONB for better performance in PostgreSQL
    defaultValue: []
  },
}, {
  sequelize,
  modelName: 'Calendar',
  tableName: 'calendars', // PostgreSQL convention is to use lowercase table names
  timestamps: true,
  hooks: {
    beforeSave: async (calendar) => {
      const currentDate = new Date();
      if (calendar.closing_date < currentDate && calendar.status === 'ACTIVE') {
        calendar.status = 'ARCHIVED';
      }
    }
  }
});

// Function to update expired calendars
const updateExpiredCalendars = async () => {
  try {
    const currentDate = new Date();
    await Calendar.update(
      { 
        status: 'ARCHIVED',
        updatedAt: new Date()
      },
      {
        where: {
          closing_date: {
            [Op.lt]: currentDate
          },
          status: 'ACTIVE'
        }
      }
    );
    console.log('Successfully updated expired calendars');
  } catch (error) {
    console.error('Error updating expired calendars:', error);
  }
};

// Function to initialize the model and table
const initializeCalendarModel = async () => {
  try {
    // Sync the model with the database
    await Calendar.sync({ alter: true }); // Use alter:true to update existing table structure
    console.log('Calendar model synchronized successfully');

    // Schedule monthly check for expired calendars
    setInterval(updateExpiredCalendars,  24 * 60 * 60 * 1000);

    // Run initial update
    await updateExpiredCalendars();
  } catch (error) {
    console.error('Error initializing Calendar model:', error);
  }
};

// Initialize the model
initializeCalendarModel();

module.exports = Calendar;