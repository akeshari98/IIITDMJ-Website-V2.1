const express = require('express');
const router = express.Router();
const carouselController = require('../controllers/HomeCarouselController');
const multer = require('multer');
const upload = multer();

// Route to get all carousels
router.get('/carousels', carouselController.getAllCarousels);

// Route to create a new carousel
router.post('/carousels',upload.none(), carouselController.createCarousel);

// Route to update an existing carousel by ID
router.put('/carousels/:id',upload.none(), carouselController.updateCarousel);

// Route to delete a carousel by ID
router.delete('/carousels/:id', carouselController.deleteCarousel);

module.exports = router;
