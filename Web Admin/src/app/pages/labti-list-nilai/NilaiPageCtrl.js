(function () {
    'use strict';

    angular.module('BlurAdmin.pages.labti-list-nilai')
        .controller('NilaiPageCtrl', NilaiPageCtrl);

    /** @ngInject */
    function NilaiPageCtrl($scope, $http) {
        var vm = this;
        vm.smartTablePageSize = 5;
        vm.listMahasiswa = 0;
        vm.searchMahasiswa = searchMahasiswa;
        vm.orderByField = 'kelas_mahasiswa';
        vm.reverseSort = false;
        
        function searchMahasiswa(param) {
            $http.get('http://localhost:1337/mahasiswa').success(function (response) {
                vm.listMahasiswa = response.length;
                vm.smartTableData = response;
            });
        }
    }

})();
