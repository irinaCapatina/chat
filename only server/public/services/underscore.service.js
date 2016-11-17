(function () {
	'use strict';

	angular
		.module('contacts')
		.factory('_', ['$window', UnderscoreService]);

	function UnderscoreService ($window) {
		return $window._;
	}
	
}());