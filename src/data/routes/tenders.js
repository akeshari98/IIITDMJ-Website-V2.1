const express = require('express');
const router = express.Router();
const tenderController = require('../controllers/TendersController');
const multer = require('multer');
const upload = multer()
// const eventImagesController = require("../controllers/EventImagesController"); // Adjust path as necessary
router.get('/tenders', tenderController.getTenders);
router.post('/tenders', upload.none(), tenderController.createTender);
router.put('/tenders/:id', upload.none(), tenderController.updateTender);
router.delete('/tenders/:id', tenderController.deleteTender);

module.exports = router;