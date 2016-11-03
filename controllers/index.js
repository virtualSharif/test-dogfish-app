var express = require('express');
var router = express.Router();

router.use(require('./userController'));
// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
router.use(require('./authenticateToCheckToken'));
// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
router.use(require('./fileController'));
module.exports = router;
