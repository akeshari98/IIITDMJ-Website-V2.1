const express = require('express');
const router = express.Router();
const achievementsController = require('../controllers/AchievementsController'); // Adjust the path as necessary

// Route to get all achievements
router.get('/achievements', achievementsController.getAllAchievements);

// Route to get overview of achievements for the homepage
router.get('/achievements-overview', achievementsController.getAchievementsOverview);

// Route to get individual achievement by ID
router.get('/achievements/:id', achievementsController.getAchievementById);

module.exports = router;
