﻿'use strict';
app.controller('loginController', ['$scope', '$location', 'authService', function ($scope, $location, authService) {

    $scope.loginData = {
        email: "",
        password: ""
    };

    $scope.message = "";

    $scope.login = function () {

        authService.login($scope.loginData).then(function (response) {

            $location.path('/test');

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

}]);