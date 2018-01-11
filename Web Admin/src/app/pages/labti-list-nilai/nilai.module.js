(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.labti-list-nilai', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('labti-list-nilai', {
          url: '/labti-list-nilai',
          templateUrl: 'app/pages/labti-list-nilai/nilai.html',
          controller: 'NilaiPageCtrl',
          controllerAs: 'vm',
          title: 'List Mahasiswa',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 800,
          },
        });
    }
  
  })();