(function () {
	'use strict';

	angular
		.module('contacts')
		.controller('ContactDetailsController', ['$stateParams', '$http', ContactDetailsController ]);

	function ContactDetailsController ($stateParams, $http) {
		var self = this;

		self.contacts = {};

		self.contacts = [
			/*{
				id: 11254124,
				name: 'Vasea'
			},
			{
				id: 4534532,
				name: 'Vitya'
			},
			{
				id: 124123,
				name: 'Jora'
			}*/
		];

		self.getContactById = function getContactById () {
			$http.get('/contacts' + $stateParams.id)
			
			.then (function success(item) {
				self.contacts = [];
				self.contacts.push(item);
			});
				
		};

		self.getContactById();
	}

}());