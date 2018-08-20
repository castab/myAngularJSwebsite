(function () {

    var app = angular.module('MyApp');

    app.controller("IndexController", ['$scope', '$http', function($scope, $http){
        var vm = this;
        vm.title = "Hello, welcome."
    }]);

})();