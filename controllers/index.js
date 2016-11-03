var express = require('express');
var router = express.Router();

router.use(require('./userController'));
// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
router.use(require('./fileController'));
module.exports = router;
