'use strict';

angular.module('jhip2App')
    .controller('CompositeController', function ($scope, cwcaseid) {
    	//
        $scope.cwcases = [];
        $scope.loadcase = function() {
            Cwcase.getOne(cwcaseid) {
               $scope.cwcases = result;
            });
        };
        $scope.children = [];
        $scope.loadChildren = function(cwcaseid) {
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
