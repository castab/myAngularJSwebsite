(function () {

    var app = angular.module('MyApp');

    app.controller("IndexController", ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog){
        
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

        /* $http.get('http://localhost/testAPI.php').then(function(resp){
            console.log(resp);
        }, function(failure){
            console.log('sidenav fill failed')
        }); */

        vm.showPrerenderedDialog = function(ev) {
            $mdDialog.show({
                controller: 'DialogController',
                controllerAs: 'vm',
                templateUrl: 'aboutme.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        };

    }]);

})();