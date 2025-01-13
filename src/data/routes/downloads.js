const express = require('express');
const router = express.Router();
const downloadController = require('../controllers/DownloadsController');
const multer = require('multer');
const upload = multer()
router.get('/downloads', downloadController.getAllDownloads);
router.post('/downloads', upload.none(),downloadController.createDownload);
router.delete('/downloads/:id', downloadController.deleteDownload);
router.put('/downloads/:id',upload.none(), downloadController.updateDownload);

module.exports = router;