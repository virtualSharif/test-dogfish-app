var express = require('express');
var router = express.Router();

router.use(require('./userController'));
router.use(require('./fileController'));
module.exports = router;
