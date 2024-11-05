const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');

// Route to get full news for the news page
router.get('/news', newsController.getAllNews);

// Route to get overview for the homepage
router.get('/news-overview', newsController.getNewsOverview);

// Route to get individual news by ID
router.get('/news/:id', newsController.getNewsById);

module.exports = router;
