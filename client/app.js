angular.module('app', []);
angular.module('app').controller('NewController', ['$http', NewController]);


function NewController($http) {

	var self = this;

	self.test = '';

	self.array = [];

	self.editorEnabled = false;

	self.enableEditor = function enableEditor() {
		self.editorEnabled = true;
		self.editContent = self.test;
	};

	self.disableEditor = function disableEditor() {
		self.editorEnabled = false;
		// console.log(self.test);
	};

	//update
	self.save = function save(arg) {
		// self.test = self.editorEnabled;

		$http.put('/posts/' + arg, {
				post: self.test
			})
			.then(function success(res) {
				self.array[arg] = res.data;
				console.log(res);
			}, function error(err) {
				console.log(err);
			});
		self.disableEditor();
	};


	self.ngClickHandler = function ngClickHandler() {

		$http.post('/posts', {
				post: self.test
			})
			.then(function success(res) {
				self.array.push(self.test);
				self.test = '';
				/*	Materialize.toast('You need to fill all fields', 4000);*/
				console.log(res);
			}, function error(error) {
				console.log(error);
			});
	};

	// self.ngUpdate = function ngUpdate(arg) {

	// 	$http.put('/posts/' + arg, {
	// 		post: self.test
	// 	})
	// 		.then(function success(res) {
	// 			self.array[arg] = res.data;
	// 			console.log(res);
	// 		}, function error(err) {
	// 			console.log(err);
	// 		});
	// };

	self.ngDelete = function ngDelete(arg) {

		$http.delete('/posts/' + arg, {
				post: self.test
			})
			.then(function success(res) {
				self.array.splice(arg, 1);
				console.log(res);
			}, function error(err) {
				console.log(err);
			});

	};

	self.getById = function getById(arg) {
		$http.get('/posts' + arg)

		.then(function success(res) {
			self.array[arg] = res;
			console.log(res);
		}, function error(err) {
			console.log(err);
		});
	};



	self.getPosts = function getPosts() {

		$http.get('/posts')
			.then(function success(res) {
				self.array = res.data;
				console.log(res);
			}, function error(error) {
				console.log(error);
			});
	};
	self.getPosts();
}
