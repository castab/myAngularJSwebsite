(function () {

    var app = angular.module('MyApp');

    app.controller("IndexController", ['$scope', '$http', '$mdToast', function($scope, $http, $mdToast){
        console.log("Index Controller ---------");
        var vm = this;
        
        vm.showSimpleToast = function(message) {
            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position("top right")
                .hideDelay(2500)
            )
        };

    }]);

})();