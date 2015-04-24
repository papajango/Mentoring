(function () {
	'use strict';
	var app = angular.module('app', ['ui.router', 'ui.bootstrap']);
	app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/error');
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: '/Login/LoginPage',
				controller: 'AuthController'
			})
			.state('list', {
				url: '/list',
				templateUrl: '/Todo/Todo',
				controller: 'TodoController'
			})
			.state('error', {
				url: '/error',
				templateUrl: '/Error/Error'
			});

	});
	app.run(['$location', 'authService', '$rootScope', function ($location, authService, $rootScope) {
		$rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
			if (!authService.getLogin()) {
				$location.path('/login');
			} else {
				if (angular.equals(toState.name, 'login')) {
					event.preventDefault();
				}
			}
		});

	}]);
}());