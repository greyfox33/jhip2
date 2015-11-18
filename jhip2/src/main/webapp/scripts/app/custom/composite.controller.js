'use strict';

angular.module('jhip2App').controller('CompositeController',
    ['$scope', '$stateParams', '$modalInstance', 'entity', 'Cwcase', 'Child',
        function($scope, $stateParams, $modalInstance, entity, Cwcase, Child) {

    	//
        $scope.Cwcases = [];
        $scope.loadcase = function() {
            Cwcase.getOne(id) {
               $scope.cwcases = result;
            });
        };
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

    });
