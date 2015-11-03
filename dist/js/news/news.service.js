(function() {
	/**
	* NewsService Module
	*
	* Service that handles communication between API
	*/
	var NewsService = angular.module('news.service', []);

	NewsService.factory('NewsFactory', ['$http', function($http){
		var sAPIReference = "";
		return {
			getAllNews: function() {
				if (sAPIReference === "" || typeof sAPIReference === "undefined") {
					sAPIReference = "news_mock.json";
				}
				return $http.get(sAPIReference);
			},
			setApiReference: function(sApi) {
				debugger;
				sAPIReference = sApi;
			}
		};
	}])
})();