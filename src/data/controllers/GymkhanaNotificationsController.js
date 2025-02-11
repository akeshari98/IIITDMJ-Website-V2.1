const GymkhanaNotifications = require('../modals/gymkhanaNotificationsModal');

// const GymkhanaNotifications = require('../modals/gymkhanaNotificationModal');

// Get all GymkhanaNotifications
exports.getAllGymkhanaNotifications = async (req, res) => {
  try {
    const { type } = req.query;
    let whereClause = {};
    if (type === 'current') {
      whereClause = {
        status: 'ACTIVE'
      };
    } else if (type === 'archived') {
      whereClause = {  
            status: 'ARCHIVED'     
      };
    }
     else {
      whereClause= null;
     }

    const gymkhanaNotifications = await GymkhanaNotifications.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']]
    });

    res.json(gymkhanaNotifications);
  } catch (error) {
    console.error('Error fetching gymkhanaNotifications:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Get GymkhanaNotifications overview (limited fields)
exports.getGymkhanaNotificationsOverview = async (req, res) => {
  try {
    const gymkhanaNotificationOverview = await GymkhanaNotifications.findAll({
      attributes: ['id', 'title','link','createdAt'],
      order: [['createdAt', 'DESC']]
    });
    res.json(gymkhanaNotificationOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get single GymkhanaNotifications by ID
exports.getGymkhanaNotificationsById = async (req, res) => {
  try {
    const gymkhanaNotifications = await GymkhanaNotifications.findByPk(req.params.id); 
    if (gymkhanaNotifications) {
      res.json(gymkhanaNotifications);
    } else {
      res.status(404).send('GymkhanaNotifications not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create new GymkhanaNotifications
exports.createGymkhanaNotifications = async (req, res) => {
  try {
    const { title,link, status } = req.body;
    if (!title || !link || !status) {
      return res.status(400).json({
        error: 'Required fields missing. Title and link are required.'
      });
    }
    const newGymkhanaNotifications = await GymkhanaNotifications.create({
      title,
      link,
      status
    });

    res.status(201).json(newGymkhanaNotifications);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update GymkhanaNotifications by ID
exports.updateGymkhanaNotifications = async (req, res) => {
  try {
    const gymkhanaNotificationId = req.params.id;
    const { title, link, status } = req.body;

    const gymkhanaNotificationItems = await GymkhanaNotifications.findByPk(gymkhanaNotificationId);
    
    if (!gymkhanaNotificationItems) {
      return res.status(404).json({
        error: 'GymkhanaNotifications not found'
      });
    }

    // Update only provided fields
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (link !== undefined) updates.link = link;
    if (status !== undefined) updates.status = status;

    await gymkhanaNotificationItems.update(updates);

    // Fetch and return the updated GymkhanaNotifications
    const updatedGymkhanaNotifications = await GymkhanaNotifications.findByPk(gymkhanaNotificationId);
    res.json(updatedGymkhanaNotifications);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete GymkhanaNotifications by ID
exports.deleteGymkhanaNotifications = async (req, res) => {
  try {
    const gymkhanaNotificationId = req.params.id;
    const gymkhanaNotificationItems = await GymkhanaNotifications.findByPk(gymkhanaNotificationId);
    
    if (!gymkhanaNotificationItems) {
      return res.status(404).json({
        error: 'GymkhanaNotifications not found'
      });
    }

    await gymkhanaNotificationItems.destroy();
    res.json({
      message: 'GymkhanaNotifications deleted successfully',
      deletedId: gymkhanaNotificationId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};