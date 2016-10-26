//express
var express = require('express');
var app = express();

//make all public directory files as public
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//routes management
var controller = require('./controllers');

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//send UI index file
app.get('/', function(req, res) {
// load the single view file (angular will handle the page changes on the front-end)
    res.sendFile('./public/index.html'); 
});

//all routes will go here
app.use('/api', controller);

// Start the server
app.listen(8000, function () {
	console.log('Application is running at http://localhost:8000');
	
});
