(function() {
	var app = angular.module('grability.app', ['ngRoute', 'ui.bootstrap', 'news.module']);

	/*Defining our route*/
	app.config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/', {
				// controller: "NewsController",
				templateUrl: "dist/templates/news.html"
			})
			.when('/home', {
				templateUrl: "dist/templates/news.html"
			})
			.when('/404', {
				templateUrl: "dist/templates/default.404.html"
			})
			.otherwise({
				redirectTo: "404"
			});
	}]);
})();
