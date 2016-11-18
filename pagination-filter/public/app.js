angular.module('app', []);

angular
	.module('app')
	.controller('MainController', [MainController]);

function MainController () {
	var self = this;

	// self.searchFunction = function searchFunction (item) {
	// 	// return item.price > 1010;
	// };

	self.currentPage = 1;
	self.itemsPerPage = 10;
	
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
			name: 'Watch',
			price: '360',
			deliveryDate: new Date(),
			description: 'description3'
		},
		{
			name: 'Videogame',
			price: '800',
			deliveryDate: new Date(),
			description: 'description4'
		},
		{
			name: 'Tablet',
			price: '580',
			deliveryDate: new Date(),
			description: 'description5'
		},
		{
			name: 'Phone',
			price: '100',
			deliveryDate: new Date(),
			description: 'description1'
		},
		{
			name: 'TV',
			price: '300',
			deliveryDate: new Date(),
			description: 'description2'
		},
		{
			name: 'TV',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
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
			name: 'Watch',
			price: '360',
			deliveryDate: new Date(),
			description: 'description3'
		},
		{
			name: 'Videogame',
			price: '800',
			deliveryDate: new Date(),
			description: 'description4'
		},
		{
			name: 'Tablet',
			price: '580',
			deliveryDate: new Date(),
			description: 'description5'
		},
		{
			name: 'Phone',
			price: '100',
			deliveryDate: new Date(),
			description: 'description1'
		},
		{
			name: 'TV',
			price: '300',
			deliveryDate: new Date(),
			description: 'description2'
		},
		{
			name: 'TV',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
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
			name: 'Watch',
			price: '360',
			deliveryDate: new Date(),
			description: 'description3'
		},
		{
			name: 'Videogame',
			price: '800',
			deliveryDate: new Date(),
			description: 'description4'
		},
		{
			name: 'Tablet',
			price: '580',
			deliveryDate: new Date(),
			description: 'description5'
		},
		{
			name: 'Phone',
			price: '100',
			deliveryDate: new Date(),
			description: 'description1'
		},
		{
			name: 'TV',
			price: '300',
			deliveryDate: new Date(),
			description: 'description2'
		},
		{
			name: 'TV',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
		},{
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
			name: 'Watch',
			price: '360',
			deliveryDate: new Date(),
			description: 'description3'
		},
		{
			name: 'Videogame',
			price: '800',
			deliveryDate: new Date(),
			description: 'description4'
		},
		{
			name: 'Tablet',
			price: '580',
			deliveryDate: new Date(),
			description: 'description5'
		},
		{
			name: 'Phone',
			price: '100',
			deliveryDate: new Date(),
			description: 'description1'
		},
		{
			name: 'TV',
			price: '300',
			deliveryDate: new Date(),
			description: 'description2'
		},
		{
			name: 'TV',
			price: '50',
			deliveryDate: new Date(),
			description: 'description3'
		}
	];

	self.mainPage = function () {
		return self.currentPage == 2;
	};

	self.lastPage = function () {
		var lastPageNr = Math.ceil(self.collection.length / self.itemsPerPage - 1);
		return self.currentPage == lastPageNr;
	};

	self.nrOfPages = function () {
		return Math.ceil(self.collection.length / self.itemsPerPage);
	};

	self.startingItem = function () {
		return self.currentPage * self.itemsPerPage;
	};

	self.pageBack = function () {
		self.currentPage = self.currentPage - 1;
	};

	self.pageForward = function () {
		self.currentPage = self.currentPage + 1;
	};

}

	// search by price > 500
angular
	.module('app')
	.filter('PriceFilter', ['$sce', PriceFilter]);

function PriceFilter ($sce) {
	return function (value) {
		if(value >= '500') {
			return $sce.trustAsHtml('<strong><i>' + value + '</strong></i>');
		} else {
			return $sce.trustAsHtml(value);
		}
	};
}

angular
	.module('app')
	.filter('StartFrom', [StartFrom]);

function StartFrom () {
	return function (input, start) {
		return input.slice(start);
	};
}