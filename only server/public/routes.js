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
				name: 'app.contact',
				url: '/contact',
				controller: 'ContactController',
				controllerAs: 'contact',
				templateUrl: 'components/contacts/templates/contact.template.html'
			})
			.state({
				name: 'app.contact.details',
				url: '/details/:id',
				templateUrl: 'components/contacts/templates/details.template.html'
			})
			.state({
				name: 'app.contact.edit',
				url: '/edit/:id',
				templateUrl: 'components/contacts/templates/form.template.html'
			})
			.state({
				name: 'app.contact.add',
				url: '/add',
				templateUrl: 'components/contacts/templates/form.template.html'
			});

			//Load default URL
		$urlRouterProvider.otherwise('app');
	}

}());