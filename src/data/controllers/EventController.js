const Event = require('../modals/eventsModal'); // Assuming the models are in the models folder

// Controller for Event operations

// Create a new event
exports.createEvent = async (req, res) => {
  try {
    const { name, date, location, external_link, cover_image } = req.body;
    const newEvent = await Event.create({
      name,
      date,
      location,
      external_link,
      cover_image,
    });
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Failed to create event" });
  }
};

// Retrieve all events without images
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll({
      order: [['createdAt', 'DESC']]
    }); // No 'include' to avoid fetching images
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Failed to fetch events" });
  }
};

// Retrieve a specific event by ID without images
exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByPk(id); // No 'include' to avoid fetching images
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event:", error);
    res.status(500).json({ error: "Failed to fetch event" });
  }
};

// Update an existing event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, location, external_link, cover_image } = req.body;
    const [updated] = await Event.update(
      { name, date, location, external_link, cover_image },
      { where: { id } }
    );
    if (!updated) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event updated successfully" });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Failed to update event" });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Event.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ error: "Failed to delete event" });
  }
};
