(function () {
	'use strict';

	angular
		.module('contacts')
		.controller('ContactsController', ['$state',  ContactsController]);

	function ContactsController ($state) {
		var self = this;

		console.log('ContactsController');
		
		self.contacts = [
		//{
			// 	id: 11254124,
			// 	name: 'Vasea'
			// },
			// {
			// 	id: 4534532,
			// 	name: 'Vitya'
			// },
			// {
			// 	id: 124123,
			// 	name: 'Jora'
			// }
		];

		self.getContact = function getContact (id) {
			$state.go('app.contact.details', {id: id});
		};
	}

}());