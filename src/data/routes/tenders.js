const express = require('express');
const router = express.Router();
const tenderController = require('../controllers/TendersController');
// const eventImagesController = require("../controllers/EventImagesController"); // Adjust path as necessary
router.get('/tenders', tenderController.getTenders);
router.post('/tenders', tenderController.createTender);
router.put('/tenders/:id', tenderController.updateTender);
router.delete('/tenders/:id', tenderController.deleteTender);

module.exports = router;