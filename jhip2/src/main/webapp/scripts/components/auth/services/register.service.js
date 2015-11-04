'use strict';

angular.module('jhip2App')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


