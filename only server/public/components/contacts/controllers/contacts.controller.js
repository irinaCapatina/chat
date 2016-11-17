(function() {
	'use strict';

	angular
		.module('contacts')
		.controller('ContactsController', ['$state', '$http', ContactsController ]);

	function ContactsController($state, $http) {
		var self = this;

		// console.log('ContactsController');

		self.getContact = function getContact(id) {
			$state.go('app.contact.details', {id: id});
		};

		self.showAllContacts = function showAllContacts() {

			$http.get('/users')
				.then(function success(res) {
					self.contacts = res.data;
					console.log(res);
				}, function error(err) {
					console.log(err);
				});
		};

		self.showAllContacts();

		self.editContact = function editContact(id) {
			$state.go('app.contact.edit', {id: id}, {reload: true});
		};

		self.deleteContact = function deleteContact(id, index) {
			console.log('The contact was deleted ', id);

			$http.delete('/users/' + id)
			.then(function success(res) {
				self.contacts.splice(index, 1);
				console.log(res);
				$state.go('app.contacts', {id: id},  {reload: true});
			}, function error(err) {
				console.log(err);
			});
		};

		function sortData() {
			return [];
		}
	}

}());


