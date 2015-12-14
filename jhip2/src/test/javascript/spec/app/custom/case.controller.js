'use strict';

describe('Maintain Case Tests ', function () {

    beforeEach(module('jhip2App'));

    describe('CompositeController', function () {
        var $scope;

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('CompositeController', {$scope: $scope});
        }));

        it('should be defined CWCASE', function () {
            expect($scope.cwcases).toBeDefined();
        });
        
//        it('should be defined CWCASE2', function () {
//            expect($scope.cwcases).toBeUndefined();
//        });
    });
});