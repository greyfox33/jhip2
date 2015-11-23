'use strict';

angular.module('jhip2App').controller('CompositeController',
    ['$scope', '$http', '$stateParams', 'Cwcase', 'Child', function($scope, $http, $stateParams, Cwcase, Child) {

        $scope.cwcases = [];
        // this is really bad, needs to be cleaned up to not hard code first array. Get rid of repeat in the composite.html
        $scope.load = function(id) {
        	Cwcase.get({id: $stateParams.id}, function(result) {
                $scope.cwcases[0] = result;
            });
        };
        $scope.load($stateParams.id);
  
        $scope.children = [];
        $scope.loadChildren = function() {
            Child.query(function(result) {
               $scope.children = result;
            });
        };
        $scope.loadChildren();
        // add a refresh or clean here
//        $scope.refresh = function () {
//            $scope.loadAll();
//            $scope.clear();
//        };

    }]);
