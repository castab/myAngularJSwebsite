(function () {
    var app = angular.module('MyApp');
    app.service("userlistService", ['$http', function ($http) {
        
        this.getUserList = function () {
            return $http.get("test.php");
        }

    }])
})();