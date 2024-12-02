const Slides = require('../modals/homeCarouselModal');

// Get all slides
exports.getAllSlides = async (req, res) => {
  try {
    const slidesList = await Slides.findAll();
    res.json(slidesList);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get slides overview (limited fields)
// exports.getSlidesOverview = async (req, res) => {
//   try {
//     const slidesOverview = await Slides.findAll({
//       attributes: ['id', 'title', 'excerpt', 'image_url', 'createdAt']
//     });
//     res.json(slidesOverview);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// // Get single slides by ID
// exports.getSlidesById = async (req, res) => {
//   try {
//     const slides = await Slides.findByPk(req.params.id); 
//     if (slides) {
//       res.json(slides);
//     } else {
//       res.status(404).send('Slides not found');
//     }
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// Create new slides
exports.createSlides = async (req, res) => {
  try {
    const { title, subtext, image_url, link } = req.body;
    // Validate required fields
    if (!title || !image_url) {
      return res.status(400).json({
        error: 'Required fields missing. Title, and Image URL are required.'
      });
    }
    const newSlides = await Slides.create({
      title,
      subtext,
      image_url,
      link
    });

    res.status(201).json(newSlides);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update slides by ID
exports.updateSlides = async (req, res) => {
  try {
    const slidesId = req.params.id;
    const { title, subtext, image_url, link } = req.body;

    const slides = await Slides.findByPk(slidesId);
    
    if (!slides) {
      return res.status(404).json({
        error: 'Slides not found'
      });
    }

    // Update only provided fields
    const updates = {};
    if (title !== undefined) updates.title = title;
    if (subtext !== undefined) updates.subtext = subtext;
    if (image_url !== undefined) updates.image_url = image_url;
    if (link !== undefined) updates.link = link;

    await slides.update(updates);

    // Fetch and return the updated slides
    const updatedSlides = await Slides.findByPk(slidesId);
    res.json(updatedSlides);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete slides by ID
exports.deleteSlides = async (req, res) => {
  try {
    const slidesId = req.params.id;
    const slides = await Slides.findByPk(slidesId);
    
    if (!slides) {
      return res.status(404).json({
        error: 'Slides not found'
      });
    }

    await slides.destroy();
    res.json({
      message: 'Slides deleted successfully',
      deletedId: slidesId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};