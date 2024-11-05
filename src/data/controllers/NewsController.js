const News = require('../modals/newsModal');

exports.getAllNews = async (req, res) => {
  try {
    const newsList = await News.findAll();
    res.json(newsList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getNewsOverview = async (req, res) => {
  try {
    const newsOverview = await News.findAll({
      attributes: ['id', 'title', 'excerpt', 'image_url', 'created_at']
    });
    res.json(newsOverview);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).send('News not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
