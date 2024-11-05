const Notices = require('../modals/noticesModal'); // Adjust the path as necessary

// Get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const noticesList = await Notices.findAll();
    res.json(noticesList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get notices overview (summary)
exports.getNoticesOverview = async (req, res) => {
  try {
    const noticesOverview = await Notices.findAll({
      attributes: ['id', 'title', 'content','link', 'createdAt'] // Adjust attributes as necessary
    });
    res.json(noticesOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a specific notice by ID
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
