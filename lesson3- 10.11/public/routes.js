(function () {
	'use strict';

	angular
		.module('contacts')
		.config(routes);

	function routes ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'app',
				url: '/app',
				controller: 'AppController',
				controllerAs: 'app',
				templateUrl: 'components/app/templates/app.template.html'
			})
			.state({
				name: 'app.about',
				url: '/about',
				controller: 'AboutController',
				controllerAs: 'about',
				templateUrl: 'components/about/templates/about.template.html'
			})
			.state({
				name: 'app.contacts',
				url: '/contacts',
				controller: 'ContactsController',
				controllerAs: 'contacts',
				templateUrl: 'components/contacts/templates/contacts.template.html'
			})
			.state({
				name: 'app.contact.details',
				url: '/:id',
				controller: 'ContactDetailsController',
				controllerAs: 'contact',
				templateUrl: 'components/contacts/templates/details.template.html'
				
			});

			//load default URL
		$urlRouterProvider.otherwise('app');
	}

}());