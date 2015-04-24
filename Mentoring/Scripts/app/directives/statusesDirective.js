(function () {
	'use strict';
	angular
		.module('app')
		.directive('statuses', function () {
		return {
			restrict: 'A',
			replace: false,
			templateUrl: '/Todo/Statuses',
			controller: 'StatusesController'
		}
	});
	angular
		.module('app')
		.controller('StatusesController', ['$scope', 'todoService', function ($scope, todoService) {
		$scope.setFilters = todoService.setFilters;
		$scope.statuses = todoService.getStatuses();
		$scope.filters = {
			statuses: $scope.statuses,
		}

	}]);
})();