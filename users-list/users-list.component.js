(function(){
    'use strict';

    angular
    .module('usersList',['ui.bootstrap'])
    .component('usersList', {
        templateUrl:'users-list/users-list.template.html',
        controllerAs: "vm",
        controller: function ($http, $log){
        var vm = this;

        vm.totalItems = 17;
        vm.currentPage = 1;

        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function() {
            $log.log('Page changed to: ' + vm.currentPage);
        };

        vm.maxSize = 5;
        vm.bigTotalItems = 175;
        vm.bigCurrentPage = 1;
            
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