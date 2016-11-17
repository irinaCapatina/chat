var express = require('express');
var bodyParser = require('body-parser');
var uuid = require('node-uuid');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

var posts = [];

app.get('/posts', function(req, res) {
	// res.status(404).send('Not found');
	res.send(posts);
});

app.post('/posts', function(req, res) {
	
	var postId = 'id' + '_' + uuid.v4();
	var object = {
		id: postId,
		post: req.body.post
	};
	posts.push(object);
	res.send('OK');
});

app.get('/posts/:id', function(req, res) {
	// res.status(404).send('Not found');
	for (var i = 0; i < posts.length; i++) {
		if(posts[i] === req.params.id) {
			res.send(posts[i]);
			console.log(posts[i]);
		}
	}
	// res.send(posts[req.params.id]);
});

// app.get('/posts/:id/:limit?/:name/:priority?', function(req, res) {
// 	// req.headers.headername;
// 	res.send(req.params.id + ' - ' + req.params.name);
// });

app.put('/posts/:id', function(req, res) {
	res.send(posts[req.params.id] = req.body.post);
	console.log(res);
	
});

app.delete('/posts/:id', function(req, res) {
	// res.status(404).send('not found');
	posts.splice(req.params.id);
	res.send('okok');

});

var server = app.listen('3000', function() {
	console.log('Server listening on port', server.address().port);
});
