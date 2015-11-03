(function() {
	/**
	* NewsService Module
	*
	* Service that handles communication between API
	*/
	var NewsService = angular.module('news.service', []);

	NewsService.factory('NewsFactory', ['$http', function($http){
		return {
			getAllNews: function() {
				return $http.get("http://colorsalontuestilo.com/news_mock.json");
			}
		};
	}])
})();