'use strict';
app.factory('testService', ['$http', function ($http) {

    var serviceBase = 'http://localhost:54832/';
    var testServiceFactory = {};

    var _getTest = function () {

        return $http.get(serviceBase + 'api/test').then(function (results) {
            return results;
        });
    };

    testServiceFactory.getTest = _getTest;

    return testServiceFactory;

}]);