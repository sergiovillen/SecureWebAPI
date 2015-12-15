'use strict';
app.controller('testController', ['$scope', 'testService', function ($scope, testService) {

    $scope.test = "Loading.....";

    testService.getTest().then(function (results) {

        $scope.test = results.data;

    }, function (error) {
        //alert(error.data.message);
    });

}]);