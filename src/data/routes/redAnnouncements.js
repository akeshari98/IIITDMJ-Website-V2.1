const express = require('express');
const router = express.Router();
const RedAnnouncementsController = require('../controllers/RedAnnouncementsController');
const multer = require('multer');
const upload = multer(); // Create an instance for parsing `multipart/form-data`
// Route to get full RedAnnouncements for the RedAnnouncements page
router.get('/RedAnnouncements', RedAnnouncementsController.getAllRedAnnouncements);

// Route to get overview for the homepage
router.get('/RedAnnouncements-overview', RedAnnouncementsController.getRedAnnouncementsOverview);

// Route to get individual RedAnnouncements by ID
router.get('/RedAnnouncements/:id', RedAnnouncementsController.getRedAnnouncementsById);

router.post('/RedAnnouncements',upload.none(), RedAnnouncementsController.createRedAnnouncements);
router.put('/RedAnnouncements/:id',upload.none(), RedAnnouncementsController.updateRedAnnouncements);
router.delete('/RedAnnouncements/:id', RedAnnouncementsController.deleteRedAnnouncements);
module.exports = router;
