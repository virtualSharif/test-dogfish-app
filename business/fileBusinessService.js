var express = require('express');
var fs = require('fs');
var app = express();

var config = require('../config/config');
var fileModel = require('../model/fileModel');


module.exports.getAllFilesInfo = function(req, res) {
    // read all the files from upload directory
    fs.readdir(config.uploadDir, (err, files) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'Check the upload directory property in config file'
            });
        }
        var filenames = [];
        files.forEach(file => {
            filenames.push(file);
        });
        res.status(200).json(filenames);
    });
};

module.exports.sendRequestedFile = function(req, res) {
    var filename = config.uploadDir + req.params.filename;
    fs.stat(filename, (err, file) => {
        if (err) {
            res.status(400).json({
                success: false,
                message: 'valid filename is required!'
            });
        } else {
            res.status(200).download(filename, req.params.filename);
        }
    });
};
