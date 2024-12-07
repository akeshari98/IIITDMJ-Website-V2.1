const express = require("express");
const router = express.Router();
const eventController = require("../controllers/EventController"); // Adjust path as necessary
const multer = require('multer');
const upload = multer();

// Route to create a new event
router.post("/events", upload.none(), eventController.createEvent);

// Route to retrieve all events
router.get("/events", eventController.getAllEvents);

// Route to retrieve a specific event by ID
router.get("/events/:id", eventController.getEventById);

// Route to update an event by ID
router.put("/events/:id", upload.none(), eventController.updateEvent);

// Route to delete an event by ID
router.delete("/events/:id", eventController.deleteEvent);

module.exports = router;
