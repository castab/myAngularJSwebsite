(function () {

    angular
    .module('MyApp', ['ngMaterial', 'ngMessages','ngRoute', 'ngCookies', 'ngMessages', 'ngAnimate'])
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
            templateUrl : "app/web/web.html",
            controller: "WebController",
            controllerAs: "vm"
        })
        .when("/rgbleds", {
            templateUrl : "tester.html"
        })
        .when("/iot", {
            templateUrl : "tester.html"
        })
        .when("/clmc", {
            templateUrl : "app/clmc/clmc.html"
        })
        .when("/wildwest", {
            templateUrl : "app/wildwest/wildwest.html"
        })
        .when("/bluetooth", {
            templateUrl : "tester.html"
        });
    })

})();