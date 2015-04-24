/// <reference path="../angular.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../jasmine.js" />
/// <reference path="../app/app.js" />
/// <reference path="../app/controllers/TodoController.js" />
/// <reference path="../angular-ui-router.js" />
/// <reference path="../angular-ui/ui-bootstrap.js" />
/// <reference path="../app/services/authService.js" />
/// <reference path="../app/services/todoService.js" />
/// <reference path="../app/services/modalService.js" />
/// <reference path="../app/controllers/ModalController.js" />


describe("ModalController", function () {
	var scope,
        controller,
		modalInstance = {
			close: function () { },
			dismiss: function () { }
		},
        item = {},
		title;
	beforeEach(function () {
		module('app');
	});

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller('ModalController', {
			$scope: scope,
			$modalInstance: modalInstance,
			item: item,
			title: title
		});
		//modalInstance = $modal.open({
		//	template: '/Todo/Details',
		//	controller: 'ModalController',
		//	scope: scope
		//});
		
	}));
	it('scope defined', function () {
		expect(scope).toBeDefined();
	});
	it('datePattern defined', function () {
		var pattern = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/;
		expect(scope.datePattern).toEqual(pattern);
	});
	it('modalInstance defined', function () {
		expect(modalInstance).toBeDefined();
	});
});