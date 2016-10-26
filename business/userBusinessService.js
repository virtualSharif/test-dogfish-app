var express = require('express');
var jwt = require('jsonwebtoken');
var app = express();

var config = require('../config/config');
var userModel = require('../model/userModel');

var getUserByUserName = function(username) {
    for (var i = 0; i < userModel.users.length; i++) {
        if (userModel.users[i].username === username) {
            return userModel.users[i];
        }
    }
};

module.exports.authenticate = function(req, res) {
    // find the user
    var user = getUserByUserName(req.body.username);
    if (!user) {
        res.json({
            success: false,
            message: 'Authentication failed. User not found.'
        });

    } else if (user) {
        // check if password matches
        if (user.password != req.body.password) {
            res.json({
                success: false,
                message: 'Authentication failed. Wrong password.'
            });
        } else {
            // if user is found and password is right
            // create a token
            var token = jwt.sign(user, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.json({
                success: true,
                message: 'Enjoy your token!',
                token: token
            });
        }
    }
};
