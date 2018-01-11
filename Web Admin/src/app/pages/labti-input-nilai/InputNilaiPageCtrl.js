(function () {
    'use strict';

    angular.module('BlurAdmin.pages.labti-input-nilai')
        .controller('InputNilaiPageCtrl', InputNilaiPageCtrl)
        .controller('DetailNilaiPageCtrl', DetailNilaiPageCtrl);

    /** @ngInject */
    function InputNilaiPageCtrl($scope, $http, $state) {
        var vm = this;
        vm.smartTablePageSize = 5;
        vm.listMahasiswa = 0;
        vm.listPraktikan = listPraktikan;
        vm.detailNilaiPraktikum = detailNilaiPraktikum;
        vm.orderByField = 'id';
        vm.reverseSort = false;
        vm.mata_praktikum = undefined;
        vm.kelas = undefined;

        function listPraktikan(param) {
            vm.parameterSearch = {
                mata_praktikum: vm.mata_praktikum,
                kelas_mahasiswa: vm.kelas
            }
            $http({
                method: 'GET',
                url: 'http://localhost:1337/mahasiswa',
                params: vm.parameterSearch
            }).
                then(function (response) {
                    vm.listMahasiswa = response.data.length;
                    vm.smartTableData = response.data;
                    console.log(vm.smartTableData);
                }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
        }

        function detailNilaiPraktikum(npm_mahasiswa) {
            $state.go('labti-detail-nilai', { npm_mahasiswa: npm_mahasiswa });
        }
    }

    function DetailNilaiPageCtrl($scope, $http, $stateParams) {
        var vm = this;
        var dataParam = $stateParams;
        vm.addNilaiPraktikum = addNilaiPraktikum;
        vm.addNilaiUjian = addNilaiUjian;
        vm.deleteNilaiPraktikum = deleteNilaiPraktikum;
        vm.updateNilaiPraktikum = updateNilaiPraktikum;
        vm.reverseSort = false;

        init();

        function init() {
            $http({
                method: 'GET',
                url: 'http://localhost:1337/detailnilai/',
                params: dataParam
            }).
                then(function (response) {
                    vm.listMahasiswa = response.data.length;
                    vm.listNilai = response.data;
                    vm.idNilai = response.data[0].id;
                    console.log(vm.idNilai);
                }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
        }

        function deleteNilaiPraktikum(index) {
            console.log()
            vm.listNilai.splice(index, 1);
        };

        function updateNilaiPraktikum(id, nilai_tp, nilai_lp, nilai_la, nilai_k) {
            $http({
                method: 'PUT',
                url: 'http://localhost:1337/updatenilai/',
                params: {
                    id: id,
                    nilai_lp: nilai_lp,
                    nilai_tp: nilai_tp,
                    nilai_la: nilai_la,
                    nilai_k: nilai_k
                }
            }).
                then(function (response) {
                }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });

        }

        function addNilaiPraktikum() {
            $http({
                method: 'POST',
                url: 'http://localhost:1337/addnilai/',
                params: {
                    id_nilai: vm.idNilai,
                    nilai_lp: 0,
                    nilai_tp: 0,
                    nilai_la: 0,
                    nilai_k: 0
                }
            }).
                then(function (response) {
                    init();
                }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
        };

        function addNilaiUjian() {
            $http({
                method: 'POST',
                url: 'http://localhost:1337/addnilai/',
                params: {
                    id_nilai: vm.idNilai,
                    nilai_lp: 0,
                    nilai_tp: 0,
                    nilai_la: 0,
                    nilai_k: 0
                }
            }).
                then(function (response) {
                    init();
                }, function (response) {
                    $scope.data = response.data || 'Request failed';
                    $scope.status = response.status;
                });
        };
    }

})();
