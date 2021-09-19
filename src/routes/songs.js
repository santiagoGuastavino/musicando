let express = require('express');
let router = express.Router();
let {
    list,
    pageRedirect
} = require('../controllers/songsController');

router.get('/:id?', list);
router.get('/%7Bpage%7D', pageRedirect)

module.exports = router;