const RedAnnouncements = require('../modals/redAnnouncementsModal');

// Get all RedAnnouncements
exports.getAllRedAnnouncements = async (req, res) => {
  try {
    const RedAnnouncementsList = await RedAnnouncements.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(RedAnnouncementsList);
  } catch (error) {
    res.status(500).send(error.message);
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
    const { title,link } = req.body;
    if (!title || !link) {
      return res.status(400).json({
        error: 'Required fields missing. Title and link are required.'
      });
    }
    const newRedAnnouncements = await RedAnnouncements.create({
      title,
      link
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
    const { title, link } = req.body;

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