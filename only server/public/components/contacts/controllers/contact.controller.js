(function () {
	'use strict';

	angular
		.module('contacts')
		.controller('ContactController', ['$state', '$stateParams', '$http',  ContactController]);


	function ContactController($state, $stateParams, $http) {

		var self = this;
		//self.contact = {};

		console.log('stateparams: ', $stateParams, $state.params);

		//show contacts by id
		self.getById = function getById () {
			$http.get('/users/' + $state.params.id) 
				.then(function success(res) {
					self.contacts = res.data[0];
					console.log(res);
				}, function error(err) {
					console.log(err);
				});
		};

		self.getById();

		self.addNewContact = function addNewContact () {
			$http.post('/users', self.contact)
			.then(function success(res) {
				console.log(res.data);
				self.arr = res.data;
				console.log('Contact added ', self.arr);
				$state.go('app.contacts');
			}, function error(err) {
				console.log(err);
			});
		};

		//edit saved contact
		self.editContact = function editContact () {
			$http.put('/users/' + $state.params.id, self.contact)
			.then(function success(res) {
				console.log(res.data);
				$state.go('app.contacts');
			}, function error(err) { 
				console.log(err);
			});
		};

			self.validOnChanges = function validOnChanges () {
			console.log($state.current.name);
			if( $state.current.name === 'app.contact.edit') {

				self.editContact();

			} else {
				console.log($state.current.name);
				self.addNewContact();

			}
		}

	}
}());