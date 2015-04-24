(function () {
	'use strict';
	angular
		.module('app')
		.service('todoService', ['$q', '$filter', '$rootScope', function ($q, $filter, $rootScope) {
		var todoList = [
			{
				id: 1,
				name: 'Go for a walk',
				creationDate: '03/03/2015',
				completionDate: '03/04/2015',
				status: 'done',
				description: 'description 1'
			},
			{
				id: 2,
				name: 'Buy BMW',
				creationDate: '03/03/2015',
				completionDate: '03/06/2015',
				status: 'inProgress',
				description: 'description 2'
			},
			{
				id: 3,
				name: 'Kill Kennedy',
				creationDate: '03/03/2015',
				completionDate: '03/07/2015',
				status: 'notStarted',
				description: 'description 3'
			},
			{
				id: 4,
				name: 'Jump',
				creationDate: '03/04/2015',
				completionDate: '03/09/2015',
				status: 'cancelled',
				description: 'description 4'
			},
			{
				id: 5,
				name: 'Eat some food',
				creationDate: '03/04/2015',
				completionDate: '03/05/2015',
				status: 'cancelled',
				description: 'mmmm tasty'
			}
		],
		statuses = [
			{
				name: 'Done',
				value: 'done',
				isChecked: false
			},
			{
				name: 'In progress',
				value: 'inProgress',
				isChecked: false
			},
			{
				name: 'Not started',
				value: 'notStarted',
				isChecked: false
			},
			{
				name: 'Cancelled',
				value: 'cancelled',
				isChecked: false
			}
		],
		copyList = angular.copy(todoList),
		todoFilters = {
			term: '',
			statuses: [],
			range: ''
		};

		this.getStatuses = getStatuses;
		this.getAll = getAll;
		this.setFilters = setFilters;
		this.delete = deleteItem;
		this.create = createItem;
		this.edit = editeItem;
		this.changeStatus = changeStatus;
		this.generateId = generateId;
		this.getMaxRemainingTime = getMaxRemainingTime;
		this.getMinRemainingTime = getMinRemainingTime;
		this.checkCompletionDate = checkCompletionDate;

		function getById(id) {
			var _task = {};
			angular.forEach(todoList, function (item, key) {
				if (item.id === id) {
					_task = todoList[key];
				}
			});
			return _task;
		}
		function generateId() {
			var max = 0;
			angular.forEach(todoList, function (item, key) {
				if (item.id >= max) {
					max = parseInt(item.id, 10);
				}
			});
			max++;
			return max;
		}
		function getStatuses() {
			return statuses;
		}

		function getAll() {
			var deferred = $q.defer();
			if (todoList) {
				angular.forEach(todoList, function (item, value) {
					item.remainingTime = new Date(item.completionDate) - new Date(item.creationDate);
				});
				deferred.resolve(todoList);
			}
			else {
				deferred.reject("Can't get todoList");
			}
			return deferred.promise;
		}
		function applyFilters() {
			var byName = $filter('name')(copyList, todoFilters.term),
			byStatus = $filter('byStatus')(byName, todoFilters.statuses),
			byTime = $filter('byTime')(byStatus, todoFilters.range);
			todoList = byTime;
			$rootScope.$broadcast('filterChanged');
		}
		function setFilters(filters) {
			if (filters) {
				todoFilters.term = filters.term || '';
				todoFilters.statuses = $filter('checked')(filters.statuses);
				todoFilters.range = filters.range || (getMinRemainingTime() + ',' + getMaxRemainingTime());
				applyFilters();
			}
		}
		function deleteItem(deletedItem) {
			for (var i = 0; i < todoList.length; i++) {
				if (todoList[i].id === deletedItem.id) {
					todoList.splice(i, 1);
					break;
				}
			}
			updateList();
		}
		function createItem(createdItem) {
			todoList.push(createdItem);
			updateList();
		}
		function editeItem(editedItem) {
			var item = getById(editedItem.id);
			item.name = editedItem.name;
			item.description = editedItem.description;
			item.completionDate = editedItem.completionDate;
			item.remainingTime = new Date(editedItem.completionDate) - new Date(editedItem.creationDate);
		}
		function changeStatus(item) {
			//imitation
			var task = getById(item.id);
			task.status = item.status;
		}
		function getMaxRemainingTime() {
			var max = 0;
			angular.forEach(copyList, function (item, key) {
				if (item.remainingTime >= max) {
					max = item.remainingTime;
				}
			});
			return max;
		}
		function getMinRemainingTime() {
			if (copyList.length) {
				var min = copyList[0].remainingTime;
				angular.forEach(copyList, function (item, key) {
					if (item.remainingTime <= min) {
						min = item.remainingTime;
					}
				});
				return min;
			}
		}
		function checkCompletionDate(item, dateString) {
			var creationDate, completionDate = $filter('date')(item.completionDate, 'MM/dd/yyyy');
			if (item.id) {
				creationDate = $filter('date')(item.creationDate, 'MM/dd/yyyy');

			} else {
				creationDate = $filter('date')(new Date(), 'MM/dd/yyyy');
			}
			if (creationDate < completionDate) {
				return true;
			}
			return false;
		}
		function updateList() {
			getAll().then(function (list) {
				copyList = list;
			}, function (error) {
			});
		}
		updateList();
	}]);
})();