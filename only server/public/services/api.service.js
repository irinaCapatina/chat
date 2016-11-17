(function () {
	'use strict';

	angular
		.module('contacts')
		.factory('Api', ['$http', 'ConfigService', Api]);

	function Api ($http, ConfigService) {
		var api = {};

		api.get = function (url) {
			var request = $http.get(ConfigService.apiUrl + url);

			return request;
		};

		api.post = function (url, date) {
			var request = $http.post (url, data);

			return request;
		};

		return api;
	} 
}());