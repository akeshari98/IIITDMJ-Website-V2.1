const { Op } = require('sequelize');
const Calendar = require('../modals/calendarsModal');
const multer = require('multer');
const upload = multer(); // Initialize multer for parsing multipart/form-data
exports.getCalendars = async (req, res) => {
  try {
    const { type } = req.query;
    const currentDate = new Date();

    let whereClause = {};
    if (type === 'current') {
      whereClause = {
        closing_date: {
          [Op.gte]: currentDate
        },
        status: 'ACTIVE'
      };
    } else if (type === 'archived') {
      whereClause = {
        [Op.or]: [
          {
            closing_date: {
              [Op.lt]: currentDate
            }
          },
          {
            status: 'ARCHIVED'
          }
        ]
      };
    }

    const calendars = await Calendar.findAll({
      where: whereClause,
      order: [['createdAt', 'ASC']],
    });

    res.json(calendars);
  } catch (error) {
    console.error('Error fetching calendars:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createCalendar = async (req, res) => {
  try {
    console.log(req.body)
    const calendar = await Calendar.create(req.body);
    res.status(201).json(calendar);
  } catch (error) {
    console.error('Error creating calendar:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateCalendar = async (req, res) => {
  try {
    const { id } = req.params;
    const calendar = await Calendar.findByPk(id);
    
    if (!calendar) {
      return res.status(404).json({ error: 'Calendar not found' });
    }

    await calendar.update(req.body);
    res.json(calendar);
  } catch (error) {
    console.error('Error updating calendar:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCalendar = async (req, res) => {
  try {
    const { id } = req.params;
    const calendar = await Calendar.findByPk(id);
    
    if (!calendar) {
      return res.status(404).json({ error: 'Calendar not found' });
    }

    await calendar.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting calendar:', error);
    res.status(400).json({ error: error.message });
  }
};