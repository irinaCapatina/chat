exports.routes =  function routes (app) {
	var contacts  = require('./components/contacts');

	
	//fetching all users
	//return arr of users

	//GET method
	app.get('/users', contacts.getAllUsers);
	//GET by id
	app.get('/users/:id', contacts.getUserById);
	// //POST method
	app.post('/users', contacts.addNewUser);
	// //PUT method
	app.put('/users/:id', contacts.editUser);
	// // DELETE method
	app.delete('/users/:id', contacts.deleteUser);

};
