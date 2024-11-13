const express = require("express");
const router = express.Router();
const eventImagesController = require("../controllers/EventImagesController"); // Adjust path as necessary

// Route to add images to an event
router.post("/eventImages", eventImagesController.addImagesToEvent);

// Route to get all images for a specific event
router.get("/eventImages/:event_id", eventImagesController.getImagesByEventId);

// Route to delete a specific image by ID
router.delete("/eventImages/:id", eventImagesController.deleteImageById);

module.exports = router;
