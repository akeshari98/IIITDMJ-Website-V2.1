const EventImage = require('../modals/eventImagesModal'); // Adjust the path as necessary

// Controller for EventImage operations

// Add images to an event
exports.addImagesToEvent = async (req, res) => {
  try {
    const { event_id, image_path } = req.body; // Expecting `image_paths` to be an array of image paths
    const newImage = await EventImage.create({ event_id, image_path });
    res.status(201).json(newImage);
  } catch (error) {
    console.error("Error adding image:", error);
    res.status(500).json({ error: "Failed to add image to event" });
  }
};



exports.getAllImages = async (req, res) => {
  try {
    const images = await EventImage.findAll();
    res.status(200).json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ error: "Failed to fetch images for event" });
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


exports.updateImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const { event_id, image_path } = req.body;
    const [updated] = await EventImage.update(
      { event_id, image_path },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ error: "Image not found" });
    }
    res.status(200).json({ message: "Image updated successfully" });
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ error: "Failed to update image" });
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
