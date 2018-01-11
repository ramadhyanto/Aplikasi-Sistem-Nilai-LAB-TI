(function () {
    'use strict';

    angular.module('BlurAdmin.pages.labti-assign-praktikum')
        .controller('AssignPageCtrl', AssignPageCtrl);

    /** @ngInject */
    function AssignPageCtrl($scope, $http) {
        var vm = this;
        vm.smartTablePageSize = 5;
        vm.listMahasiswa = 0;
        vm.searchMahasiswa = searchMahasiswa;
        vm.orderByField = 'kelas_mahasiswa';
        vm.reverseSort = false;
        vm.disabled = true;
        vm.withSearchItem = {};
        vm.paramKelas = [
            { label: '4IA18', value: '4IA18' },
            { label: '4IA19', value: '4IA19' },
            { label: '4IA20', value: '4IA20' },
            { label: '4IA21', value: '4IA21' },
            { label: '4IA22', value: '4IA22' },
            { label: '4IA23', value: '4IA23' },
            { label: '4IA24', value: '4IA24' },
            { label: '4IA25', value: '4IA25' },
          ];
          vm.paramMataPraktikum = [
            { label: 'Grafik Komputer', value: 1 },
            { label: 'Jaringan komputer', value: 2 },
          ];

        function searchMahasiswa(param) {
            $http.get('http://localhost:1337/mahasiswa').success(function (response) {
                vm.listMahasiswa = response.length;
                vm.smartTableData = response;
            });
        }
    }

})();
