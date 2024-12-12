const express = require('express');
const router = express.Router();
const calendarController = require('../controllers/CalendarsController');
const multer = require('multer');
const upload = multer()
// const eventImagesController = require("../controllers/EventImagesController"); // Adjust path as necessary
router.get('/calendars', calendarController.getCalendars);
router.post('/calendars', upload.none(), calendarController.createCalendar);
router.put('/calendars/:id', upload.none(), calendarController.updateCalendar);
router.delete('/calendars/:id', calendarController.deleteCalendar);

module.exports = router;