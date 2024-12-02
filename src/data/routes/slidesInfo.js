const express = require('express');
const router = express.Router();
const slidesController = require('../controllers/SlidesController');
const multer = require('multer');
const upload = multer(); // Create an instance for parsing `multipart/form-data`
// Route to get full slides for the slides page
router.get('/slides', slidesController.getAllSlides);

// Route to get overview for the homepage
// router.get('/slides-overview', slidesController.getSlidesOverview);

// Route to get individual slides by ID
// router.get('/slides/:id', slidesController.getSlidesById);

router.post('/slides',upload.none(), slidesController.createSlides);
router.put('/slides/:id',upload.none(), slidesController.updateSlides);
router.delete('/slides/:id', slidesController.deleteSlides);
module.exports = router;
