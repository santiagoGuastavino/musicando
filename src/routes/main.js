let express = require('express');
let router = express.Router();
let { links } = require('../controllers/mainController');

router.get('/', links);

module.exports = router;