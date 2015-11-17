'use strict';

angular.module('jhip2App')
    .controller('CompositeController', function ($scope, ??cwcaseid) {
    	
    	//** STOP HERE: need to load cwcase with single passed case
    	// and load all children of that case. 
        $scope.cwcases = [];
        $scope.loadAll = function() {
            Cwcase.query(function(result) {
               $scope.cwcases = result;
            });
        };
        $scope.loadAll();


        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

    });
