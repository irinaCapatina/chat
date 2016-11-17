exports.routes =  function routes (app) {
	var users  = require('./components/users');
	
	//fetching all users
	//return arr of users

	//GET method
	app.get('/users', users.getAllUsers);
	//GET by id
	app.get('/users/:id', users.getUserById);
	// //POST method
	app.post('/users', users.addNewUser);
	// //PUT method
	app.put('/users/:id', users.editUser);
	// // DELETE method
	app.delete('/users/:id', users.deleteUser);

};
