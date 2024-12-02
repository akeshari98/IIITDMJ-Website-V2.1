const express = require('express');
const router = express.Router();
const newsController = require('../controllers/NewsController');
const multer = require('multer');
const upload = multer(); // Create an instance for parsing `multipart/form-data`
// Route to get full news for the news page
router.get('/news', newsController.getAllNews);

// Route to get overview for the homepage
router.get('/news-overview', newsController.getNewsOverview);

// Route to get individual news by ID
router.get('/news/:id', newsController.getNewsById);

router.post('/news',upload.none(), newsController.createNews);
router.put('/news/:id',upload.none(), newsController.updateNews);
router.delete('/news/:id', newsController.deleteNews);
module.exports = router;
