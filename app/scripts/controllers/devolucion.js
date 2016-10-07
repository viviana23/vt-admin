'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:DevolucionCtrl
 * @description
 * # DevolucionCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
  .controller('DevolucionCtrl', function ($scope, lodash, $http,$location, config, tipo_zonasApi, eventosApi, $filter, $window) {
    $scope.usuario = localStorage.getItem('usuario');

    $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }  
  });
