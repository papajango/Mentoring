(function () {
	'use strict';
	angular
		.module('app')
		.service('modalService', ['$modal', '$q', 'todoService', function ($modal, $q, todoService) {
		this.open = open;
		function open(item, title, templateUrl) {
			var deferred = $q.defer(),
			modalInstance = showModal(item, title, templateUrl);
			modalInstance.result.then(function (changedItem) {
				deferred.resolve(changedItem);
			}, function (error) {
				deferred.reject(error);
			});
			return deferred.promise;
		}
		function showModal(item, title, templateUrl) {
			var modalInstance = $modal.open({
				templateUrl: templateUrl,
				controller: 'ModalController',
				resolve: {
					item: function () {
						return item;
					},
					title: function () {
						return title;
					}
				}
			});
			return modalInstance;
		}
	}]);
}());