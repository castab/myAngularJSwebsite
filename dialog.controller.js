(function () {

    var app = angular.module('MyApp');

    app.controller("DialogController", ['$scope', '$mdDialog', '$timeout', function($scope, $mdDialog, $timeout){
        
        console.log("Dialog Controller ---------");
        
        var vm = this;
        vm.selectedTabIndex = 0;
        vm.showMusicTab = false;

        vm.showDialog = function(ev, target) {
            $mdDialog.show({
                templateUrl: target,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                multiple: true,
                controller: () => this,
                controllerAs: 'vm'
            });
        };

        vm.hideDialog = function() {
            $mdDialog.hide();
        }

    }]);

})();