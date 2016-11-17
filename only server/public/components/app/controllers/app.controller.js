(function () {
	'use strict';

	angular		
		.module('contacts')
		.controller('AppController', ['$http', AppController]);	

	function AppController ($http) {
		var self = this;

		console.log('AppController');

		self.data = 'Hi';
	}

}());