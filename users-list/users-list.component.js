(function(){
    'use strict';

    angular
    .module('usersList',['ui.bootstrap'])
    .component('usersList', {
        templateUrl:'users-list/users-list.template.html',
        controllerAs: "vm",
        controller: function ($http, $log){
        var vm = this;
            
        $http({
            method: 'GET',
            url : "users-list/users.json",

        }).then(function successCallback(data) {
            vm.myData = data.data;
            
            vm.totalItems = vm.myData.length;
            vm.maxSize = 6;
            vm.currentPage = 1;
            vm.displayItems = vm.myData.slice(0,5);
            vm.itemsPerPage = 5;

            vm.pageChanged = function() {
                var startPos = (vm.currentPage - 1) * 5;
                vm.displayItems = vm.myData.slice(startPos, startPos + 5);
            };
  
        }, function errorCallback(response) {
            console.log('We don\'t have a data');
        });
     }
  });
})();