(function () {

    angular
    .module('MyApp', ['ngMaterial', 'ngMessages'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .backgroundPalette('grey')
        .dark();
    });

})();