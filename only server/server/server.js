var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());



//routes
require('./routes.js').routes(app);

var server = app.listen('8080', function() {
	console.log('Server is listening on port ' + server.address().port);
});
