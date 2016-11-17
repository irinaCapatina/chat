(function () {
	'use strict';

	angular
		.module('contacts')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state({
				name: 'app',
				url: '/app',
				controller: 'MainController',
				controllerAs: 'app',
				templateUrl: 'components/app/template/main-page.template.html'
			})
			.state({
				name: 'app.contacts',
				url: '/contacts',
				controller: 'ContactsController',
				controllerAs: 'contacts',
				template: 'components/contact/templates/contactList.template.html'
			})
			.state({
				name: 'app.contact',
				url: '/contact',
				controller: 'ContactController',
				controllerAs: 'contact',
				templateUrl: 'components/contact/templates/contact.template.html'
			})
			.state({
				name: 'app.contact.detail',
				url: '/detail/:id',
				templateUrl: 'components/contact/templates/detail.template.html'
			})
			.state({
				name: 'app.contact.edit',
				url: '/edit/:id',
				templateUrl: 'components/contact/templates/form.template.html'
			})
			.state({
				name: 'app.contact.newcontact',
				url: '/add-contact',
				templateUrl: 'components/contact/templates/form.template.html'
			});	

		$urlRouterProvider.otherwise('app');
	}


}());