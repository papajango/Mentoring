(function () {
	'use strict';
	angular
		.module('app')
		.controller('ModalController', ['$scope', '$modalInstance', 'todoService', 'item', 'title', function ($scope, $modalInstance, todoService, item, title) {
		$scope.item = angular.copy(item);
		$scope.title = title;
		$scope.datePattern = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
		$scope.apply = function () {
			if (todoService.checkCompletionDate($scope.item)) {
				$modalInstance.close($scope.item);
			} else {
				$scope.completionError = 'Wrong completion date!';
			}
		};
		$scope.cancel = function () {
			$modalInstance.dismiss($scope.item);
		};
	}]);
}());