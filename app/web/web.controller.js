(function () {

    var app = angular.module('MyApp');

    app.controller("WebController", ['userlistService', function(userlistService){
        
        console.log("Web Controller ---------");
        
        var vm = this;

        vm.username = "";

        vm.removeEntry = function(itemToRemove){
            vm.users = _.reject(vm.users, function(user){return (user == itemToRemove)});
        }

        userlistService.getUserList()
        .then(function(resp){
            if (resp.data && !resp.errors){
                vm.users = resp.data;
            }
        }, function (fail) {
            console.log('fail');
            var newUser = {
                username: "Brayan J. Castaneda",
                id: 47,
                message: "This is the default message when the GET request fails. I wonder what could be wrong...",
                subject: "Well, this is awkward."
            };
            var anotherUser = _.cloneDeep(newUser);
            anotherUser.subject = "It's me again."
            anotherUser.message = "I got a little lonely so I added myself again for company.";
            vm.users = Array();
            vm.users.push(newUser);
            vm.users.push(anotherUser);
            vm.users.push(_.cloneDeep(anotherUser));
            vm.users.push(_.cloneDeep(anotherUser));
        })


    }]);

})();