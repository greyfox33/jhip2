'use strict';

angular.module('jhip2App')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
