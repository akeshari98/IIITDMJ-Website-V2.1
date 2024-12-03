const express = require("express");
const router = express.Router();
const eventImagesController = require("../controllers/EventImagesController"); // Adjust path as necessary
const multer = require('multer');
const upload = multer();
// Route to add images to an event
router.post("/eventImages", upload.none(), eventImagesController.addImagesToEvent);

router.put("/eventImages/:id", upload.none(), eventImagesController.updateImageById);

// Route to get all images for a specific event
router.get("/eventImages/", eventImagesController.getAllImages);
router.get("/eventImages/:event_id", eventImagesController.getImagesByEventId);

// Route to delete a specific image by ID
router.delete("/eventImages/:id", eventImagesController.deleteImageById);

module.exports = router;
