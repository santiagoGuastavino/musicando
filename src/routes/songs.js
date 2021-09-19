let express = require('express');
let router = express.Router();
let { list } = require('../controllers/songsController');

router.get('/', list);

module.exports = router;