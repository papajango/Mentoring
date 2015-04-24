(function () {
	'use scrict';
	angular
		.module('app')
		.filter('remainingTimeFilter', function () {
			return function (remainingTime) {
				var seconds = Math.floor(remainingTime / 1000),
				months = Math.floor(seconds / 2628000),
				days = Math.floor(seconds / 86400),
				hours = Math.floor((seconds % 86400) / 3600),
				minutes = Math.floor(((seconds % 86400) % 3600) / 60);
				if (months > 0) {
					return (months > 1) ? (months + " months ") : (months + " month ");
				}
				if (days > 0) {
					return (days > 1) ? (days + " days ") : (days + " day ");
				}
				if (hours > 0) {
					return (hours > 1) ? (hours + " hours ") : (hours + " hour ");
				}
				if (minutes >= 0) {
					return (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
				}
			}
		});
	angular
		.module('app')
		.filter('name', function () {
		return function (array, name) {
			if (name) {
				var newArray = [];
				angular.forEach(array, function (item, key) {
					if (item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1) {
						newArray.push(item);
					}
				});
				if (newArray.length) {
					return newArray;
				}
			} else {
				return array;
			}
		}
	});
	angular
		.module('app')
		.filter('byStatus', function () {
			return function (array, statuses) {
				var newArray = [];
				angular.forEach(array, function (item, key) {
					angular.forEach(statuses, function (status, key) {
						if (item.status === status.value) {
							newArray.push(item);
						}
					});
				});
				if (newArray.length) {
					return newArray;
				}
				return array;
			}
	});
	angular
		.module('app')
		.filter('byTime', function () {
			return function (array, range) {
				var arr = range.split(','),
						min = arr[0],
						max = arr[1],
				newArray = [];
				angular.forEach(array, function (item, value) {
					if (item.remainingTime >= min && item.remainingTime <= max) {
						newArray.push(item);
					}
				});
				if (newArray.length) {
					return newArray;
				}
				return newArray;
			}
	});
	angular
		.module('app')
		.filter('checked', function () {
			return function (array, range) {
				var filterStatusses = [];
				angular.forEach(array, function (item, key) {
					if (item.isChecked) {
						filterStatusses.push(item);
					}
				});
				return filterStatusses;
			}
	});
}());