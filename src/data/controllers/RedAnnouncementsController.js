const RedAnnouncements = require('../modals/redAnnouncementsModal');

// Get all RedAnnouncements
exports.getAllRedAnnouncements = async (req, res) => {
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

    const redAnnouncements = await RedAnnouncements.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']]
    });

    res.json(redAnnouncements);
  } catch (error) {
    console.error('Error fetching redAnnouncements:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Get RedAnnouncements overview (limited fields)
exports.getRedAnnouncementsOverview = async (req, res) => {
  try {
    const redAnnouncementsOverview = await RedAnnouncements.findAll({
      attributes: ['id', 'title','link','createdAt'],
      order: [['createdAt', 'DESC']]
    });
    res.json(redAnnouncementsOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get single RedAnnouncements by ID
exports.getRedAnnouncementsById = async (req, res) => {
  try {
    const redAnnouncements = await RedAnnouncements.findByPk(req.params.id); 
    if (redAnnouncements) {
      res.json(redAnnouncements);
    } else {
      res.status(404).send('RedAnnouncements not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create new RedAnnouncements
exports.createRedAnnouncements = async (req, res) => {
  try {
    const { title,link, status } = req.body;
    if (!title || !link || !status) {
      return res.status(400).json({
        error: 'Required fields missing. Title and link are required.'
      });
    }
    const newRedAnnouncements = await RedAnnouncements.create({
      title,
      link,
      status
    });

    res.status(201).json(newRedAnnouncements);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update RedAnnouncements by ID
exports.updateRedAnnouncements = async (req, res) => {
  try {
    const redAnnouncementsId = req.params.id;
    const { title, link, status } = req.body;

    const redAnnouncementsItems = await RedAnnouncements.findByPk(redAnnouncementsId);
    
    if (!redAnnouncementsItems) {
      return res.status(404).json({
        error: 'RedAnnouncements not found'
      });
    }

    // Update only provided fields
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (link !== undefined) updates.link = link;
    if (status !== undefined) updates.status = status;

    await redAnnouncementsItems.update(updates);

    // Fetch and return the updated RedAnnouncements
    const updatedRedAnnouncements = await RedAnnouncements.findByPk(redAnnouncementsId);
    res.json(updatedRedAnnouncements);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete RedAnnouncements by ID
exports.deleteRedAnnouncements = async (req, res) => {
  try {
    const redAnnouncementsId = req.params.id;
    const redAnnouncementsItems = await RedAnnouncements.findByPk(redAnnouncementsId);
    
    if (!redAnnouncementsItems) {
      return res.status(404).json({
        error: 'RedAnnouncements not found'
      });
    }

    await redAnnouncementsItems.destroy();
    res.json({
      message: 'RedAnnouncements deleted successfully',
      deletedId: redAnnouncementsId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};