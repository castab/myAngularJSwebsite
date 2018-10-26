(function () {

    var app = angular.module('MyApp');

    app.controller("DialogController", ['$scope', '$mdDialog', '$timeout', '$cookies', function($scope, $mdDialog, $timeout, $cookies){
        
        console.log("Dialog Controller ---------");
        
        var vm = this;
        vm.selectedTabIndex = 0;
        
        // Check cookies to check if user has already 'discoverd' the music tab
        vm.musicTabCookie = $cookies.get('musicTabDiscovered');
        if (vm.musicTabCookie) {
            // Cookie is there, check if true or false
            if (vm.musicTabCookie === 'true') {
                vm.showMusicTab = true;
            } else if (vm.musicTabCookie === 'false') {
                vm.showMusicTab = false;
            } else {
                // Otherwise, set it
                $cookies.put('musicTabDiscovered', false);
                vm.showMusicTab = false;
            }
        } else {
            // Cookie is not there
            $cookies.put('musicTabDiscovered', false);
            vm.showMusicTab = false;
        }
        
        vm.setMusicTabDiscoveryCookie = function() {
            $cookies.put('musicTabDiscovered', true);
            vm.showMusicTab = true;
        }


        vm.showDialog = function(ev, target) {
            $mdDialog.show({
                templateUrl: target,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                multiple: true,
                controller: function() { return vm; },
                controllerAs: 'vm'
            });
        };

        vm.hideDialog = function() {
            $mdDialog.hide();
        }

    }]);

})();