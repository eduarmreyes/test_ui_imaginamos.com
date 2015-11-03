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

	// Loading directive
	app.directive('loading', ['$http', function ($http) {
	    return {
	        restrict: 'A',
	        link: function (scope, elm, attrs) {
	            scope.isLoading = function () {
	                return $http.pendingRequests.length > 0;
	            };
	            scope.$watch(scope.isLoading, function (v) {
	                if (v) {
	                    elm.show();
	                } else {
	                    elm.hide();
	                }
	            });
	        }
	    };
	}]);	
})();
