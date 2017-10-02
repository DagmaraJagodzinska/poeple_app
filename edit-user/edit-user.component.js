(function(){
    'use strict';

    angular
    .module('editUser',[])
    .component('editUser', {
        templateUrl:'edit-user/edit-user.template.html',
        controllerAs: "vm",
        controller: function ($http, $log){
        var vm = this;
            
        $http({
            method: 'GET',
            url : "../../users-list/users.json"

        }).then(function successCallback(data) {
            vm.myData = data.data;
            
            console.log(vm.myData);
  
        }, function errorCallback(response) {
            console.log('We don\'t have a data');
        });
     }
  });
})();