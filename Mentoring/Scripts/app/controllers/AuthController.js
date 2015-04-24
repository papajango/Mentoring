(function () {
	'use strict';
	angular
		.module('app')
		.controller('AuthController', ['$scope', 'authService', function ($scope, authService) {
		$scope.loginPattern = /^[a-zA-Z]*$/;
		$scope.logIn = logIn;
		function logIn(login, password) {
			authService.logIn(login, password).then(function (successData) {
			}, function (errorData) {
				$scope.error = true;
			});
		}
	}]);
}());