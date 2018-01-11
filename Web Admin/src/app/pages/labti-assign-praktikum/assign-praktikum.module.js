(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.labti-assign-praktikum', ['ui.select'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('labti-assign-praktikum', {
          url: '/labti-assign-praktikum',
          templateUrl: 'app/pages/labti-assign-praktikum/assign-praktikum.html',
          controller: 'AssignPageCtrl',
          controllerAs: 'vm',
          title: 'Assign Praktikum',
          sidebarMeta: {
            icon: 'ion-compose',
            order: 800,
          },
        });
    }
  
  })();