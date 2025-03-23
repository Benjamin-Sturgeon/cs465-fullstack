var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET home page. pass through to controller */
router.get('/', ctrlMain.index);

module.exports = router;
