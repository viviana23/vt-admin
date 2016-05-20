'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:ZonaetapaCtrl
 * @description
 * # ZonaetapaCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('ZonaetapaCtrl', function($scope, lodash, $http, Flash, $location, config, eventosApi, $filter, $window) {
     
       $scope.id = $window.sessionStorage.getItem('id');

        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar"
        }

	
        eventosApi.get({ id:$scope.id, act: 'all' }, function(data) {
            $scope.eventos = data.data;

            console.log(data)
        });


        /*
        eventosApi.get({}, function(data) {
            $scope.zonaetapa = data.data;
            //  console.log(data)

        });

*/
        $scope.doGuardar = function() {
            if (typeof $scope.zeef.id === 'undefined') {
                eventosApi.save({ id: $scope.id, act: 'zonaetapa' }, $scope.zeef, function(data) {
                    console.log(data);

                });
                 eventosApi.get({ id:$scope.id, act: 'all' }, function(data) {
            $scope.eventos = data.data;

            console.log(data)
        });
            } else {

                console.log("estamos editando");
                
                eventosApi.update({id:$scope.id, act:'zonaetapa',id2:$scope.zeef.id},$scope.zeef,
                    function(data) {
                        var message = 'zonaetapa Editada!';
                        Flash.create('success', message, 'custom-class');
                         $scope.zeef = [];
                        $scope.buttons.register = "Guardar";
                    });

            }

        }

        
        $scope.editar = function(id,index,indexZona) {
            var data  = $scope.eventos.etapas[index].zonas[indexZona].pivot;
            console.log(data)
            $scope.zeef = data;
            $scope.buttons.register = "Editar";
        }
        

    });


