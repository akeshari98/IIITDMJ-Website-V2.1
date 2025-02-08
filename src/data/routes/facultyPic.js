const express = require('express');
const router = express.Router();
const facultyPicController = require('../controllers/FacultyPicController');
const multer = require('multer');
const upload = multer();

// Route to get all facultyPics
router.get('/facultyPics', facultyPicController.getAllFacultyPics);

// Route to create a new facultyPic
router.post('/facultyPics',upload.none(), facultyPicController.createFacultyPic);

// Route to update an existing facultyPic by ID
router.put('/facultyPics/:id',upload.none(), facultyPicController.updateFacultyPic);

// Route to delete a facultyPic by ID
router.delete('/facultyPics/:id', facultyPicController.deleteFacultyPic);

module.exports = router;
