const Carousel = require('../modals/homeCarouselModal');

exports.getAllCarousels = async (req, res) => {
  try {
    const carousels = await Carousel.findAll();
    res.json(carousels);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createCarousel = async (req, res) => {
  try {
    const { title, subtext, image_url, link } = req.body;
    
    // Add validation
    if (!image_url) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    const newCarousel = await Carousel.create({ 
      title, 
      subtext, 
      image_url, 
      link 
    });
    
    res.status(201).json(newCarousel);
  } catch (error) {
    console.error('Detailed create error:', error);
    res.status(500).json({ 
      message: 'Error creating carousel', 
      error: error.message 
    });
  }
};

exports.updateCarousel = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtext, image_url, link } = req.body;

    const [updated] = await Carousel.update(
      { title, subtext, image_url, link },
      { where: { id } }
    );

    if (updated) {
      const updatedCarousel = await Carousel.findByPk(id);
      res.status(200).json(updatedCarousel);
    } else {
      res.status(404).send('Carousel not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.deleteCarousel = async (req, res) => {
  try {
    const carouselId = req.params.id;
    const carousel = await Carousel.findByPk(carouselId);
    
    if (!carousel) {
      return res.status(404).json({
        error: 'Carousel not found'
      });
    }

    await carousel.destroy();
    res.json({
      message: 'Carousel deleted successfully',
      deletedId: carouselId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
