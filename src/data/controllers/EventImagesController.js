const EventImage = require('../modals/eventImagesModal'); // Adjust the path as necessary

// Controller for EventImage operations

// Add images to an event
exports.addImagesToEvent = async (req, res) => {
  try {
    const { event_id, image_paths } = req.body; // Expecting `image_paths` to be an array of image paths
    const images = image_paths.map((path) => ({ event_id, image_path: path }));
    
    const newImages = await EventImage.bulkCreate(images);
    res.status(201).json(newImages);
  } catch (error) {
    console.error("Error adding images:", error);
    res.status(500).json({ error: "Failed to add images to event" });
  }
};

// Get all images for a specific event
exports.getImagesByEventId = async (req, res) => {
  try {
    const { event_id } = req.params;
    const images = await EventImage.findAll({ where: { event_id } });
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images for event" });
  }
};

// Delete a specific image by ID
exports.deleteImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await EventImage.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ error: "Failed to delete image" });
  }
};
