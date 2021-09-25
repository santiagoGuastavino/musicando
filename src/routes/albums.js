let express = require('express');
let router = express.Router();
let { list } = require('../controllers/albumsController');

router.get('/', list);

module.exports = router;