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
    const newCarousel = await Carousel.create({ title, subtext, image_url, link });
    res.status(201).json(newCarousel);
  } catch (error) {
    res.status(500).send(error.message);
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
    const { id } = req.params;
    const deleted = await Carousel.destroy({ where: { id } });

    if (deleted) {
      res.status(204).send('Carousel deleted');
    } else {
      res.status(404).send('Carousel not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
