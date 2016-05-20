'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:ListEventosCtrl
 * @description
 * # ListEventosCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
  .controller('ListEventosCtrl',function($scope, lodash, $http, $location, config, tipo_zonasApi, eventosApi, $filter, $window) {
       /* 
       var query = eventosApi.query();
            query.$promise.then(function(data) {

            });
*/
        eventosApi.get(function(data) {
            $scope.eventos = data.data;

            console.log(data)
        });

        $scope.ver = function(id) {
            console.log(id)
             $window.sessionStorage.setItem('id', id);
                    $scope.id = id;
                    $location.url("/eventos");
            

           //$scope.buttons.register = "Editar";
        }
         $scope.doGuardar = function(data) {
            console.log(data)
            sessionStorage.clear();
            $location.url("/eventos");
           //$scope.buttons.register = "Editar";
        }



    });
