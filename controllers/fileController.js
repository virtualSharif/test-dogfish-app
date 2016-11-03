// express
var express = require('express');
var router = express.Router();
var fileBusinessService = require('../business/fileBusinessService');

router.get('/files', function(req, res) {
    return fileBusinessService.getAllFilesInfo(req, res);
});

router.get('/files/:filename', function(req, res) {
    return fileBusinessService.sendRequestedFile(req, res);
});

module.exports = router;
