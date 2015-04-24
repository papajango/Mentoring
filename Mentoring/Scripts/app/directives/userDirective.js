(function () {
	'use strict';
	angular
		.module('app')
		.directive('user', function () {
		return {
			restrict: 'A',
			replace: false,
			templateUrl: '/Login/User',
			controller: 'UserController'
		};
	});
	angular
		.module('app')
		.controller('UserController', ['$scope', '$rootScope', 'authService', function ($scope, $rootScope, authService) {
		$scope.logOff = function () {
			authService.logOff();
		}
		//by default
		$scope.login = authService.getLogin();
		//if changed
		$rootScope.$on('userLoggedIn', function () {
			$scope.login = authService.getLogin();
		});
		$scope.$on('$destroy',
			$rootScope.$on('userLoggedIn', function () {
				$scope.login = authService.getLogin();
			})
		);
	}]);
}());