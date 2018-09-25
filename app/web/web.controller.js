(function () {

    var app = angular.module('MyApp');

    app.controller("WebController", ['userlistService', '$mdDialog', '$cookies', function(userlistService, $mdDialog, $cookies){
        
        console.log("Web Controller ---------");
        
        var vm = this;

        vm.switch = "false";
        vm.newUsers = [];

        var q = userlistService.getUserList()
        .then(function(resp){
            if (resp.data && !resp.errors){
                vm.users = resp.data;
            }
        }, function (fail) {
            var newUser = {
                username: "Brayan J. Castaneda",
                id: 47,
                message: "This is the default message when the GET request fails. I wonder what could be wrong...",
                subject: "Well, this is awkward.",
                image: "app/home/media/me.jpg"
            };
            var anotherUser = _.cloneDeep(newUser);
            anotherUser.subject = "It's me again."
            anotherUser.message = "I got a little lonely so I added myself again for company.";
            vm.users = [];
            vm.users.push(newUser);
            vm.users.push(anotherUser);
        })

        // Make sure the userListService finishes getting the user list
        // before checking cookies
        q.then( function () {
            vm.newUsers = $cookies.getObject('newUsers');
            if (vm.newUsers && vm.newUsers.length > 0) {
                _.forEach(vm.newUsers, function (user) {
                    vm.users.push(_.cloneDeep(user));
                });
            }
        })


        // Prepare capture form input
        vm.user = {
            username: "",
            subject: "",
            message: "",
            image: "app/web/media/blank_account.png"
        };

        vm.removeEntry = function(itemToRemove){
            vm.users = _.reject(vm.users, function(user){return (user == itemToRemove)});
            vm.newUsers = _.reject(vm.newUsers, function(user){
                return (user.username == itemToRemove.username && user.subject == itemToRemove.subject && user.message == itemToRemove.message);
            });
            if (vm.newUsers.length > 0) {
                $cookies.putObject('newUsers', vm.newUsers);
            } else {
                $cookies.remove('newUsers');
            }
        };

        vm.showDialog = function(ev, target) {
            vm.user = {
                username: "",
                subject: "",
                message: "",
                image: "app/web/media/blank_account.png"
            };
            $mdDialog.show({
                templateUrl: target,
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                multiple: false,
                controller: () => this,
                controllerAs: 'vm'
            });
        };

        vm.hideDialog = function() {
            $mdDialog.hide();
        };

        vm.cancelInput = function() {
            vm.hideDialog();
            vm.user = {
                username: "",
                subject: "",
                message: "",
                image: "app/web/media/blank_account.png"
            };
        };

        vm.addContent = function(isFormValid) {
            if (vm.isInputValid(isFormValid)) {
                vm.users.push(_.cloneDeep(vm.user));
                if (!vm.newUsers) {vm.newUsers = [];};
                vm.newUsers.push(_.cloneDeep(vm.user));
                $cookies.putObject('newUsers', vm.newUsers);
            }
            vm.hideDialog();
        };

        vm.isInputValid = function(isFormValid) {
            if (isFormValid) {
                vm.switch = "true";
            } else {
                vm.switch = "false";
            };
            return isFormValid;
        }

    }]);

})();