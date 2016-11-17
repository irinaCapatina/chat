(function () {
	'use strict';

	angular
		.module('contacts')
		.controller('AboutController', ['$http', AboutController]);

	function AboutController ($http) {
		var self = this;

		console.log('AboutController');

		self.newFunction = function newFunction () {
			return true;
		};
	}
}());