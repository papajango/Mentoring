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


describe("TodoController", function () {
	var scope,
        controller,
    	todoService,
        $httpBackend,
    	modalService,
        modalServiceMock,
    	modalResult,
        item;
    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function ($injector, $rootScope, $controller, _todoService_, _$httpBackend_) {
    	scope = $rootScope.$new();
    	todoService = _todoService_;
    	item = {
    		id: 1,
    		name: 'Go for a walk',
    		creationDate: '03/03/2015',
    		completionDate: '03/04/2015',
    		status: 'done',
    		description: 'description 1'
    	};
    	modalResult = {
    		then: function (success) {
    			success(item);
    		}
    	};
    	modalServiceMock = {
    		open: function (item) { },
    		showModal: function (options) { }
    	};
        controller = $controller('TodoController', {
        	$scope: scope,
        	todoService: todoService,
        	modalService: modalServiceMock
        });
        $httpBackend = _$httpBackend_;
        spyOn(modalServiceMock, 'open')
			.and
			.returnValue(modalResult);
        scope.$digest();
    }));
    it('todoList must be defined', function () {
        expect(scope.todoList).toBeDefined();
    });
    it('name of first item in todoList has to be "Go for a walk"', function () {
    	var name = scope.todoList[0].name;
    	expect(name).toBe('Go for a walk');
    });
    it('todoList length must be 5', function () {
        expect(scope.todoList.length).toBe(5);
    });
    it('after deleting count equals 4', function () {
    	scope.delete(item);
    	expect(scope.todoList.length).toBe(4);
    });
    it('after creating count equals 6', function () {
    	scope.create(item);
    	expect(scope.todoList.length).toBe(6);
    });
    it('after editing name equals "changed name"', function () {
    	item.name = "changed name";
    	scope.edit(item);
    	expect(scope.todoList[0].name).toBe('changed name');
    });
    it('statuses length must be 4', function () {
        expect(scope.statuses.length).toBe(4);
    });
    it('httpBackend defined', function () {
    	expect($httpBackend).toBeDefined();
    });
    it('todoService defined', function () {
    	expect(todoService).toBeDefined();
    });
});