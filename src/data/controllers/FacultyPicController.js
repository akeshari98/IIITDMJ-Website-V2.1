const FacultyPic = require('../modals/facultyPicModal');

exports.getAllFacultyPics = async (req, res) => {
  try {
    const facultyPics = await FacultyPic.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(facultyPics);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createFacultyPic = async (req, res) => {
  try {
    const { fac_id, profile_pic } = req.body;
    
    // Add validation
    if (!profile_pic) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    const newFacultyPic = await FacultyPic.create({ 
      fac_id,
      profile_pic 
    });
    
    res.status(201).json(newFacultyPic);
  } catch (error) {
    console.error('Detailed create error:', error);
    res.status(500).json({ 
      message: 'Error creating facultyPic', 
      error: error.message 
    });
  }
};

exports.updateFacultyPic = async (req, res) => {
  try {
    const { id } = req.params;
    const { fac_id, profile_pic } = req.body;

    const [updated] = await FacultyPic.update(
      {fac_id, profile_pic },
      { where: { id } }
    );

    if (updated) {
      const updatedFacultyPic = await FacultyPic.findByPk(id);
      res.status(200).json(updatedFacultyPic);
    } else {
      res.status(404).send('FacultyPic not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.deleteFacultyPic = async (req, res) => {
  try {
    const facultyPicId = req.params.id;
    const facultyPic = await FacultyPic.findByPk(facultyPicId);
    
    if (!facultyPic) {
      return res.status(404).json({
        error: 'FacultyPic not found'
      });
    }

    await facultyPic.destroy();
    res.json({
      message: 'FacultyPic deleted successfully',
      deletedId: facultyPicId
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
