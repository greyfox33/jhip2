'use strict';

angular.module('jhip2App').controller('CompositeController',
    ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

    	//
        $scope.cwcase = [];
        //$scope.cwcase = entity;
        $scope.loadcase = function(id) {
        	$http.get("http://localhost:3000/#/cwcase/" + id)
        	.success(function(response)
        			{$scope.cwcase = response.records;}
        	);
        };
        
//      Cwcase.get( {id: $stateparams.id}, function (result) {
//      $scope.cwcase = result;
//   });
//        $scope.load = function (id) {
//            Child.get({id: id}, function(result) {
//                $scope.child = result;
//            });
//        };
        $scope.loadcase($stateParams.id);
        
        $scope.children = [];
        $scope.loadChildren = function(id) {
        	$http.get("http://localhost:8080/childByCase")
        	.success(function(response)
        			{$scope.children = response.records;}
        	);
        };
        // add a refresh or clean here
//        $scope.refresh = function () {
//            $scope.loadAll();
//            $scope.clear();
//        };

    }]);
