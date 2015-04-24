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
/// <reference path="../app/controllers/AuthController.js" />


describe("AuthController", function () {
    var scope,
        controller;
    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        controller = $controller('AuthController', {
            $scope: scope
        });
    }));
    it('loginPattern must be defined', function () {
        expect(scope.loginPattern).toBeDefined();
    });
    //just a function
    it('logIn must be defined', function () {
        expect(scope.logIn).toBeDefined();
    });
});