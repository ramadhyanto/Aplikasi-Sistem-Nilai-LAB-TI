(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.labti-input-nilai', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('labti-input-nilai', {
          url: '/labti-input-nilai',
          templateUrl: 'app/pages/labti-input-nilai/list-nilai.html',
          controller: 'InputNilaiPageCtrl',
          controllerAs: 'vm',
          title: 'Input Nilai Praktikum',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 800,
          },
        })
        
        .state('labti-detail-nilai', {
            url: '/labti-detail-nilai/:npm_mahasiswa',
            templateUrl: 'app/pages/labti-input-nilai/detail-nilai.html',
            controller: 'DetailNilaiPageCtrl',
            controllerAs: 'vm',
            title: 'Detail Nilai Praktikum'
          });
    }
  
  })();