'use strict';

angular.module('jhip2App').controller('CompositeController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Cwcase', 'Child',
        function($scope, $stateParams, $modalInstance, entity, Cwcase, Child) {

    	//
        $scope.cwcase = [];
        $scope.loadcase = function(id) {
            Cwcase.get( {id: id}, function (result) {
               $scope.cwcase = result;
            });
        };
//        $scope.load = function (id) {
//            Child.get({id: id}, function(result) {
//                $scope.child = result;
//            });
//        };
        $scope.loadcase(id);
        
        $scope.children = [];
        $scope.loadChildren = function(id) {
        	$http.get("http://localhost:8080/childByCase")
        	.success(function(response)
        			{$scope.children = response.records;}
        	);
        };
        // add a refresh or clean here
        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

    }]);
