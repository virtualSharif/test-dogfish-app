// express
var express = require('express');
var router = express.Router();
var userBusinessService = require('../business/userBusinessService');

router.post('/authenticate', function(req, res) {
    console.log("Authenticating User");
    res.send(userBusinessService.authenticate(req, res));
});

module.exports = router;
