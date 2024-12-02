const Achievements = require('../modals/achievementsModal');

// Get all news
exports.getAllAchievements = async (req, res) => {
  try {
    const achievementsList = await Achievements.findAll();
    res.json(achievementsList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get news overview (limited fields)
exports.getAchievementsOverview = async (req, res) => {
  try {
    const newsOverview = await Achievements.findAll({
      attributes: ['id', 'title', 'excerpt', 'image_url', 'createdAt']
    });
    res.json(newsOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get single news by ID
exports.getAchievementById = async (req, res) => {
  try {
    const news = await Achievements.findByPk(req.params.id); 
    if (news) {
      res.json(news);
    } else {
      res.status(404).send('Achievement not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Create new news
exports.createAchievements = async (req, res) => {
  try {
    const { title, excerpt, content, image_url, link } = req.body;
    if (!title || !link) {
      return res.status(400).json({
        error: 'Required fields missing. Title and link are required.'
      });
    }
    const newNews = await Achievements.create({
      title,
      excerpt,
      content,
      image_url,
      link
    });

    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update news by ID
exports.updateAchievements = async (req, res) => {
  try {
    const newsId = req.params.id;
    const { title, excerpt, content, image_url, link } = req.body;

    const news = await Achievements.findByPk(newsId);
    
    if (!news) {
      return res.status(404).json({
        error: 'Achievement not found'
      });
    }

    // Update only provided fields
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (excerpt !== undefined) updates.excerpt = excerpt;
    if (content !== undefined) updates.content = content;
    if (image_url !== undefined) updates.image_url = image_url;
    if (link !== undefined) updates.link = link;

    await news.update(updates);

    // Fetch and return the updated news
    const updatedNews = await Achievements.findByPk(newsId);
    res.json(updatedNews);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete news by ID
exports.deleteAchievements = async (req, res) => {
  try {
    const newsId = req.params.id;
    const news = await Achievements.findByPk(newsId);
    
    if (!news) {
      return res.status(404).json({
        error: 'Achievement not found'
      });
    }

    await news.destroy();
    res.json({
      message: 'Achievement deleted successfully',
      deletedId: newsId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};