var express = require('express');
var router = express.Router();
const ctrlmain = require('../controllers/main');

/* GET home page. pass through to controller */
router.get('/', ctrlmain.index);

module.exports = router;
