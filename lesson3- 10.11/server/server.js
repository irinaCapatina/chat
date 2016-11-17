var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../public'));

//routes
require('./routes.js').routes(app);

var server = app.listen('8080', function () {
	console.log('Server is listening on port ' + server.address().port);
});