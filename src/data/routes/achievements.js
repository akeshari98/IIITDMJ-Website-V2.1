const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/AchievementsController'); // Adjust the path as necessary
const multer = require('multer');
const upload = multer();
// Route to get all achievements
router.get('/achievements', achievementsController.getAllAchievements);

// Route to get overview of achievements for the homepage
router.get('/achievements-overview', achievementsController.getAchievementsOverview);

// Route to get individual achievement by ID
router.get('/achievements/:id', achievementsController.getAchievementById);

router.post('/achievements',upload.none(), achievementsController.createAchievements);
router.put('/achievements/:id',upload.none(), achievementsController.updateAchievements);
router.delete('/achievements/:id', achievementsController.deleteAchievements);
module.exports = router;
