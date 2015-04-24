(function () {
	'use strict';
	angular
		.module('app')
		.service('authService', ['$location', '$rootScope', '$q', function ($location, $rootScope, $q) {
		var users = [
			{
				login: 'diman',
				pass: '123',
				role: 'admin'
			},
			{
				login: 'john',
				pass: '123',
				role: 'user'
			}
		];
		$rootScope.AUTHORIZED = false;

		this.logIn = logIn;
		this.logOff = logOff;
		this.getLogin = getLogin;

		function getByLogin(login) {
			var _user = {};
			angular.forEach(users, function (user, key) {
				if (user.login === login) {
					_user = users[key];
				}
			});
			return _user;
		}
		function logIn(login, password) {
			var deferred = $q.defer();
			var user = getByLogin(login);
			if (user) {
				sessionStorage.setItem('login', login);
				$location.path('/list');
				$rootScope.AUTHORIZED = true;
				$rootScope.$emit('userLoggedIn');
				deferred.resolve(login);
			}
			else {
				console.log("Failed logIn");
				deferred.reject();
			}
			return deferred.promise;
		}

		function logOff() {
			sessionStorage.removeItem('login');
			$rootScope.AUTHORIZED = false;
			$location.path('/login');
		}
		function getLogin() {
			var login = sessionStorage.getItem('login');
			if (login) {
				$rootScope.AUTHORIZED = true;
				$rootScope.ROLE = getByLogin(login).role;
				return login;
			}
			return null;
		}
	}]);
}());