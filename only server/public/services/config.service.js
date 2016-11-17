(function () {
	'use strict';

	angular
		.module('contacts')
		.factory('ConfigService', [ConfigService]);

	function ConfigService () {
		var Config = {};

		Config.apiUrl = 'http://our-domain-name.com/';

		Config.data = 'some data';

		Config.curretUser = {};

		Config.validation = function validation () {

		};

		return Config;
	}
}());