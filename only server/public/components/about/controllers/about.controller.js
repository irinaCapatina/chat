(function () {
	'use strict';
	angular
	.module('contacts')
	.controller('AboutController', ['$http', AboutController]);

function AboutController ($http) {

	var self = this;

	console.log('AboutController');

	self.aboutFunction = function aboutFunction () {
		return true;
	};

}

}());