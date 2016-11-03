// express
var express = require('express');
var router = express.Router();

var config = require('../config/config');
var userBusinessService = require('../business/userBusinessService');

router.post('/authenticate', function(req, res) {
    console.log("Authenticating User");
    return userBusinessService.authenticate(req, res);
});

module.exports = router;
