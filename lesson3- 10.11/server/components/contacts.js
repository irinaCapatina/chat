var uuid = require('node-uuid');
// var users = [{
// 	name: 'dima',
// 	phone: '25252',
// 	address: 'world'
// }];

var users = [];

//GET method
exports.getAllUsers = function getAllUsers(req, res) {
	//return res.send(users);
	res.send(users);
};

//POST method
exports.addNewUser = function addNewUser(req, res) {
	var userId = 'id' + '_' + uuid.v4();
	var obj = {
		id: userId,
		name: req.body.name,
		phone: req.body.phone,
		address: req.body.address
	};

	users.push(obj);
	return res.send('Welcome ' + req.body.name);	
	//res.send('Welcome, ' + userId);
};

//GET by ID method
exports.getUserById = function getUserById(req, res) {
	users.forEach(function(item) {
		if(item.id === req.params.id){
			res.send(item);
		}
	});
	return res.send(404).send('Not found');
};

//PUT method
exports.editUser = function editUser(req, res) {
	users.forEach(function(item) {
		if(item.id === req.params.id){
			item.name = req.body.name;
			item.phone = req.body.phone;
			item.address = req.body.address;
			
			return res.send('Welcome ');
		}
	});
	res.status(404).send('Not found');
};

//DELETE method
exports.deleteUser = function deleteUser(req, res) {

	users.forEach(function(item, index) {
		if(item.id === req.params.id){
			var deleteObj = users.splice(index, 1);
		
			return res.send('User was deleted');
		}	
	});
	res.status(404).send('Not found');
};
