/// <reference path="../angular.js" />
/// <reference path="../angular-mocks.js" />
/// <reference path="../jasmine.js" />
/// <reference path="../app/app.js" />
/// <reference path="../angular-ui-router.js" />
/// <reference path="../angular-ui/ui-bootstrap.js" />
/// <reference path="../app/services/authService.js" />
/// <reference path="../app/services/todoService.js" />
/// <reference path="../app/services/modalService.js" />
/// <reference path="../app/controllers/TodoController.js" />
/// <reference path="../app/controllers/ModalController.js" />

describe("TodoController_Modal", function () {

	var modalServiceMock,
		scope,
		controller,
		itemToDelete;

	beforeEach(function () {
		module('app');
	});

	beforeEach(inject(function ($injector, $rootScope, $controller, _todoService_, _$httpBackend_) {
		scope = $rootScope.$new();
		todoService = _todoService_;

		itemToDelete = {
			id: 2,
			name: 'Buy BMW',
			creationDate: '03/03/2015',
			completionDate: '03/06/2015',
			status: 'inProgress',
			description: 'description 2'
		};

		var modalResult = {
		    then: function (success) {
		        return success(itemToDelete);
			}
		};

		modalServiceMock = {
			open: function (item) {	
			},
			showModal: function (options) {
			}
		};

		spyOn(modalServiceMock, "open")
            .and
            .returnValue(modalResult);

		controller = $controller('TodoController', {
			$scope: scope,
			modalService: modalServiceMock,
			todoService: todoService
		});

		scope.$digest();
	}));

	it("Count should be equal 5", function () {
		expect(scope.todoList.length).toBe(5);
	});

	it("Count should be equal 4", function () {
		scope.delete(itemToDelete);
		expect(scope.todoList.length).toBe(4);
	});
});