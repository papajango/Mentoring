(function () {
	'use strict';
	angular
		.module('app')
		.directive('rangeDir', function () {
		return {
			restrict: 'A',
			replace: false,
			controller: 'RangeController',
			link: function ($scope, element, attrs) {
				attrs.$set('data-slider-min', $scope.rangeSlider.min);
				attrs.$set('data-slider-max', $scope.rangeSlider.max);
				attrs.$set('data-slider-step', $scope.rangeSlider.step);
				attrs.$set('data-slider-value', '[' + $scope.rangeSlider.min + ', ' + $scope.rangeSlider.max + ']');
				element.parent().append('<div class="clearfix"><b>' + $scope.from + '</b><b class="f-right">' + $scope.to + '</b></div><script>$("#dir").slider({tooltip: "hide"});</script>');
			}
		}
	});
	angular
		.module('app')
		.controller('RangeController', ['$scope', 'todoService', '$filter', function ($scope, todoService, $filter) {
		var minRemainingTime = todoService.getMinRemainingTime(),
			maxRemainingTime = todoService.getMaxRemainingTime();
		$scope.from = $filter('remainingTimeFilter')(minRemainingTime),
		$scope.to = $filter('remainingTimeFilter')(maxRemainingTime);

		$scope.rangeSlider = {
			min: minRemainingTime,
			max: maxRemainingTime,
			step: 5
		};
	}]);
})();