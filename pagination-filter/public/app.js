angular.module('app', []);

angular
	.module('app')
	.filter('StartFrom', [StartFrom]);

function StartFrom () {
	return function (input, start) {
		start = +start;
		return input.slice(start);
	};
}

angular
	.module('app')
	.controller('PaginationController', [PaginationController]);

function PaginationController () {
	var self = this;

	self.currentPage = 0;
	self.itemsPerPage = 3;
	self.collection = [];

	self.mainPage = function mainPage () {
		return self.currentPage == 0;
	};

	self.lastPage = function lastPage () {
		var lastPageNr = Math.ceil(self.collection.length / self.itemsNr - 1);
		return self.currentPage == lastPageNr;
	};

	self.nrOfPages = function nrOfPages () {
		return Math.ceil(self.collection.length / self.itemsNr);
	};

	self.startingItem = function startingItem () {
		return self.currentPage * self.itemsNr;
	};

	self.pageBack = function pageBack () {
		self.currentPage = self.currentPage - 1;
	};

	self.pageForward = function pageForward () {
		self.currentPage = self.currentPage + 1;
	};

}

angular
	.module('app')
	.filter('PriceFilter', ['$sce', PriceFilter]);

function PriceFilter ($sce) {
	return function (value) {
		if(value >= '500') {
			return $sce.trustAsHtml('<strong>' + value + '</strong>');
		} else {
			return $sce.trustAsHtml(value);
		}
	};
}

angular
	.module('app')
	.controller('MainController', [MainController]);

function MainController () {
	var self = this;

	self.searchFunction = function searchFunction (item) {
		return item.price > 1010;
	};

	self.collection = [
		{
			name: 'Phone',
			price: '500',
			deliveryDate: new Date(),
			description: 'description1'
		},
			{
			name: 'TV',
			price: '700',
			deliveryDate: new Date(),
			description: 'description2'
		},
			{
			name: 'e-book',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
		},
			{
			name: 'tegbhg',
			price: '12',
			deliveryDate: new Date(),
			description: 'description4'
		},
			{
			name: 'pppp',
			price: '58',
			deliveryDate: new Date(),
			description: 'description5'
		},
			{
			name: 'Phone',
			price: '500',
			deliveryDate: new Date(),
			description: 'description1'
		},
			{
			name: 'TV',
			price: '700',
			deliveryDate: new Date(),
			description: 'description2'
		},
			{
			name: 'e-book',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
		},
			{
			name: 'tegbhg',
			price: '12',
			deliveryDate: new Date(),
			description: 'description4'
		},
			{
			name: 'pppp',
			price: '58',
			deliveryDate: new Date(),
			description: 'description5'
		},
			{
			name: 'Phone',
			price: '500',
			deliveryDate: new Date(),
			description: 'description1'
		},
			{
			name: 'TV',
			price: '700',
			deliveryDate: new Date(),
			description: 'description2'
		},
			{
			name: 'e-book',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
		},
			{
			name: 'tegbhg',
			price: '12',
			deliveryDate: new Date(),
			description: 'description4'
		},
			{
			name: 'pppp',
			price: '58',
			deliveryDate: new Date(),
			description: 'description5'
		}
	];

}