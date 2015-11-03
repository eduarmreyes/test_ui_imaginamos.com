(function() {
	/**
	* news.module Module
	*
	* This module will take care of news shown in the application
	*/
	var oNewsModule = angular.module('news.module', ['ui.bootstrap', 'news.service']);

	oNewsModule.controller('NewsController', ['$scope', 'NewsFactory', function($scope, NewsFactory){
		$scope.isCollapsed = true;
		var aNews = this; // This is to define our global variable
		aNews.content = [];
		aNews.message_list = [];
		NewsFactory.getAllNews()
			.success(function(aData) {
				aNews.content = aData;
			}).
			error(function(aData) {
				aNews.message_list.push(aData);
			});
	}]);
})();