(function() {
	'use strict';
	angular
		.module('app')
		.controller('TodoController', ['$scope', '$rootScope', '$filter', 'todoService', 'modalService', function ($scope, $rootScope, $filter, todoService, modalService) {
		var CREATE_TITLE = 'Create',
		EDIT_TITLE = 'Edit',
		DELETE_TITLE = 'Are you sure?',
		DELETE_TEMPLATE='/Todo/DeleteItem',
		DETAILS_TEMPLATE='/Todo/Details';

		$scope.todoList = [];
		$scope.changeStatus = todoService.changeStatus;
		$scope.statuses = todoService.getStatuses();
		$scope.delete = deleteItem;
		$scope.edit = editItem;
		$scope.create = createItem;


		//init to scope
		todoService.getAll().then(function (list) {
			$scope.todoList = list;
		}, function (errorData) {
			console.log("Error with getting todoList: " + errorData);
		});


		function deleteItem(item) {
			modalService.open(item, DELETE_TITLE, DELETE_TEMPLATE).then(function (deletedItem) {
				todoService.delete(deletedItem);
			}, function (error) {
				console.log(error);
			});
		}
		function editItem(item) {
			modalService.open(item, EDIT_TITLE, DETAILS_TEMPLATE).then(function (editedItem) {
				todoService.edit(editedItem);
			}, function (error) {
				console.log(error);
			});
		}
		function createItem(item) {
			modalService.open(item, CREATE_TITLE, DETAILS_TEMPLATE).then(function (createdItem) {
				createdItem.id = todoService.generateId();
				createdItem.creationDate = new Date();
				createdItem.completionDate = $filter('date')(createdItem.completionDate, 'MM/dd/yyyy');
				createdItem.remainingTime = new Date(createdItem.completionDate) - new Date(createdItem.creationDate);
				createdItem.status = 'notStarted';
				todoService.create(createdItem);
			}, function (error) {
				console.log(error);
			});
		}
		$rootScope.$on('filterChanged', function (event, data) {
			todoService.getAll().then(function (list) {
				$scope.todoList = list;
			}, function (errorData) {
				console.log("Error with getting todoList: " + errorData);
				$scope.todoList = [];
			});
		});
		$scope.$on('$destroy',
			$rootScope.$on('filterChanged', function (event, data) {
			}, function (errorData) {
			})
		);
	}]);
})();