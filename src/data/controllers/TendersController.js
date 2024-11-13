const { Op } = require('sequelize');
const Tender = require('../modals/tendersModal');

exports.getTenders = async (req, res) => {
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

    const tenders = await Tender.findAll({
      where: whereClause,
      order: [['advertisement_date', 'DESC']],
    });

    res.json(tenders);
  } catch (error) {
    console.error('Error fetching tenders:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createTender = async (req, res) => {
  try {
    const tender = await Tender.create(req.body);
    res.status(201).json(tender);
  } catch (error) {
    console.error('Error creating tender:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.updateTender = async (req, res) => {
  try {
    const { id } = req.params;
    const tender = await Tender.findByPk(id);
    
    if (!tender) {
      return res.status(404).json({ error: 'Tender not found' });
    }

    await tender.update(req.body);
    res.json(tender);
  } catch (error) {
    console.error('Error updating tender:', error);
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTender = async (req, res) => {
  try {
    const { id } = req.params;
    const tender = await Tender.findByPk(id);
    
    if (!tender) {
      return res.status(404).json({ error: 'Tender not found' });
    }

    await tender.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting tender:', error);
    res.status(400).json({ error: error.message });
  }
};