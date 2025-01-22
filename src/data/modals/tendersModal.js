const { Model, DataTypes, Op } = require('sequelize');
const sequelize = require('../sequelize');

class Tender extends Model {}

Tender.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  tender_no: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  importantUpdate: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  advertisement_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  closing_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isIn: [['PROCUREMENT', 'CONSTRUCTION', 'SERVICES', 'OTHERS']]
    }
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
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      isIn: [['TENDER', 'EOI', 'NIQ', 'BID']]
    }
  },
  attachments: {
    type: DataTypes.JSONB, // Using JSONB for better performance in PostgreSQL
    defaultValue: []
  },
  department: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  estimated_value: {
    type: DataTypes.DECIMAL(15, 2)
  }
}, {
  sequelize,
  modelName: 'Tender',
  tableName: 'tenders', // PostgreSQL convention is to use lowercase table names
  timestamps: true,
  indexes: [
    {
      fields: ['tender_no']
    },
    {
      fields: ['closing_date']
    },
    {
      fields: ['status']
    }
  ],
  hooks: {
    beforeSave: async (tender) => {
      const currentDate = new Date();
      if (tender.closing_date < currentDate && tender.status === 'ACTIVE') {
        tender.status = 'ARCHIVED';
      }
    }
  }
});

// Function to update expired tenders
const updateExpiredTenders = async () => {
  try {
    const currentDate = new Date();
    await Tender.update(
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
    console.log('Successfully updated expired tenders');
  } catch (error) {
    console.error('Error updating expired tenders:', error);
  }
};

// Function to initialize the model and table
const initializeTenderModel = async () => {
  try {
    // Sync the model with the database
    await Tender.sync({ alter: true }); // Use alter:true to update existing table structure
    console.log('Tender model synchronized successfully');

    // Schedule daily check for expired tenders
    setInterval(updateExpiredTenders, 24 * 60 * 60 * 1000);

    // Run initial update
    await updateExpiredTenders();
  } catch (error) {
    console.error('Error initializing Tender model:', error);
  }
};

// Initialize the model
initializeTenderModel();

module.exports = Tender;