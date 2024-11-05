const express = require('express');
const router = express.Router();
const noticesController = require('../controllers/NoticesController'); // Adjust the path as necessary

// // Route to get all notices
router.get('/notices', noticesController.getAllNotices);

// Route to get an overview of notices for the homepage
router.get('/notices-overview', noticesController.getNoticesOverview);

// Route to get an individual notice by ID
router.get('/notices/:id', noticesController.getNoticeById);

// // Optional: Add routes for creating, updating, and deleting notices
// // Route to create a new notice
// router.post('/notices', noticesController.createNotice);

// // Route to update an existing notice by ID
// router.put('/notices/:id', noticesController.updateNotice);

// // Route to delete a notice by ID
// router.delete('/notices/:id', noticesController.deleteNotice);

module.exports = router;
