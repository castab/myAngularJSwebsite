(function () {

    angular
    .module('MyApp', ['ngMaterial', 'ngMessages','ngRoute'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .backgroundPalette('grey')
        .dark();
    })
    .config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "app/home/home.html",
            controller : "IndexController",
            controllerAs : "vm"
        })
        .when("/slam", {
            templateUrl : "app/slam/slam.html"
        })
        .when("/web", {
            templateUrl : "app/web/web.html"
        })
        .when("/rgbleds", {
            templateUrl : "tester.html"
        })
        .when("/iot", {
            templateUrl : "tester.html"
        })
        .when("/clms", {
            templateUrl : "tester.html"
        })
        .when("/wildwest", {
            templateUrl : "tester.html"
        })
        .when("/bluetooth", {
            templateUrl : "tester.html"
        });
    })

})();