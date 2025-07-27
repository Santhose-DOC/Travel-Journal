const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { submitForm } = require('../controllers/formController');

router.post('/submit', upload.single('passportImage'), submitForm);

module.exports = router;
