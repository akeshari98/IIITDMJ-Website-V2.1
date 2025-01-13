const Notices = require('../modals/noticesModal');

// Get all notice
exports.getAllNotices = async (req, res) => {
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

    const notices = await Notices.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']]
    });

    res.json(notices);
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Get notice overview (limited fields)
exports.getNoticesOverview = async (req, res) => {
  try {
    const noticeOverview = await Notices.findAll({
      attributes: ['id', 'title', 'excerpt', 'createdAt'],
      order: [['createdAt', 'DESC']]
    });
    res.json(noticeOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get single notice by ID
exports.getNoticeById = async (req, res) => {
  try {
    const notice = await Notices.findByPk(req.params.id); 
    if (notice) {
      res.json(notice);
    } else {
      res.status(404).send('Notice not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create new notice
exports.createNotice = async (req, res) => {
  try {
    const { title, excerpt, content, link, status } = req.body;
    if (!title || !link) {
      return res.status(400).json({
        error: 'Required fields missing. Title and link are required.'
      });
    }
    const newNews = await Notices.create({
      title,
      excerpt,
      content,
      link,
      status
    });

    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update notice by ID
exports.updateNotice = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const { title, excerpt, content, link, status } = req.body;

    const notice = await Notices.findByPk(noticeId);
    
    if (!notice) {
      return res.status(404).json({
        error: 'Notice not found'
      });
    }

    // Update only provided fields
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (excerpt !== undefined) updates.excerpt = excerpt;
    if (content !== undefined) updates.content = content;
    if (link !== undefined) updates.link = link;
    if (status !== undefined) updates.status = status;

    await notice.update(updates);

    // Fetch and return the updated notice
    const updatedNews = await Notices.findByPk(noticeId);
    res.json(updatedNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete notice by ID
exports.deleteNotice = async (req, res) => {
  try {
    const noticeId = req.params.id;
    const notice = await Notices.findByPk(noticeId);
    
    if (!notice) {
      return res.status(404).json({
        error: 'Notice not found'
      });
    }

    await notice.destroy();
    res.json({
      message: 'Notice deleted successfully',
      deletedId: noticeId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};