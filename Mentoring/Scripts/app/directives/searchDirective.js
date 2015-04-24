(function () {
	'use strict';
	angular
		.module('app')
		.directive('search', function () {
		return {
			restrict: 'A',
			replace: false,
			templateUrl: '/Todo/Search',
			controller: 'SearchController'
		}
	});
	angular
		.module('app')
		.controller('SearchController', ['$scope', 'todoService', function ($scope, todoService) {
		$scope.setFilters = todoService.setFilters;
	}]);
}());