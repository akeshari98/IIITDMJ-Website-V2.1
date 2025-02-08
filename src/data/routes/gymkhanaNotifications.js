const express = require('express');
const router = express.Router();
const GymkhanaNotificationsController = require('../controllers/GymkhanaNotificationsController');
const multer = require('multer');
const upload = multer(); // Create an instance for parsing `multipart/form-data`
// Route to get full GymkhanaNotifications for the GymkhanaNotifications page
router.get('/GymkhanaNotifications', GymkhanaNotificationsController.getAllGymkhanaNotifications);

// Route to get overview for the homepage
router.get('/GymkhanaNotifications-overview', GymkhanaNotificationsController.getGymkhanaNotificationsOverview);

// Route to get individual GymkhanaNotifications by ID
router.get('/GymkhanaNotifications/:id', GymkhanaNotificationsController.getGymkhanaNotificationsById);

router.post('/GymkhanaNotifications',upload.none(), GymkhanaNotificationsController.createGymkhanaNotifications);
router.put('/GymkhanaNotifications/:id',upload.none(), GymkhanaNotificationsController.updateGymkhanaNotifications);
router.delete('/GymkhanaNotifications/:id', GymkhanaNotificationsController.deleteGymkhanaNotifications);
module.exports = router;
