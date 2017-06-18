(function(){
    'use strict';

    angular
    .module('usersList')
    .component('usersList', {
        templateUrl:'users-list/users-list.template.html',
        controllerAs: "vm",
        controller: function ($http){
        var vm = this;
            
        $http({
            method: 'GET',
            url : "users-list/users.json",

        }).then(function successCallback(data) {
            vm.myData = data.data;
        }, function errorCallback(response) {
            console.log('We don\'t have a data');
        });
     }
  });
})();