'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:ListZonasCtrl
 * @description
 * # ListZonasCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('ListZonasCtrl', function($scope, lodash, $http, Flash, $location, config, tipo_zonasApi, eventosApi, $filter, $window) {
        $scope.id = $window.sessionStorage.getItem('id');

        eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
            $scope.eventos = data.data;

            console.log(data)
        });

         $scope.ver = function(id,indexzona) {
            console.log(indexzona);
            $window.sessionStorage.setItem('indexzonas', indexzona);
            $scope.indexzonas = indexzona;
            console.log(id)
             $window.sessionStorage.setItem('id_zona', id);
                    $scope.id_zona = id;
                    $location.url("/filas");
            

           //$scope.buttons.register = "Editar";
        }
    });
