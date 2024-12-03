const express = require('express');
const router = express.Router();
const MarqueeController = require('../controllers/MarqueeController');
const multer = require('multer');
const upload = multer(); // Create an instance for parsing `multipart/form-data`
// Route to get full Marquee for the Marquee page
router.get('/Marquee', MarqueeController.getAllMarquee);

// Route to get overview for the homepage
router.get('/Marquee-overview', MarqueeController.getMarqueeOverview);

// Route to get individual Marquee by ID
router.get('/Marquee/:id', MarqueeController.getMarqueeById);

router.post('/Marquee',upload.none(), MarqueeController.createMarquee);
router.put('/Marquee/:id',upload.none(), MarqueeController.updateMarquee);
router.delete('/Marquee/:id', MarqueeController.deleteMarquee);
module.exports = router;
