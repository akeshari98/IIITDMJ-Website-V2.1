const Achievements = require('../modals/achievementsModal'); // Adjust the path as necessary

// Get all achievements
exports.getAllAchievements = async (req, res) => {
  try {
    const achievementsList = await Achievements.findAll();
    res.json(achievementsList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get achievements overview (just the summary)
exports.getAchievementsOverview = async (req, res) => {
  try {
    const achievementsOverview = await Achievements.findAll({
      attributes: ['id', 'title', 'excerpt', 'image_url', 'created_at'] // Adjust attributes as necessary
    });
    res.json(achievementsOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a specific achievement by ID
exports.getAchievementById = async (req, res) => {
  try {
    const achievement = await Achievements.findByPk(req.params.id);
    if (achievement) {
      res.json(achievement);
    } else {
      res.status(404).send('Achievement not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
