'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:EtapasCtrl
 * @description
 * # EtapasCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
  .controller('EtapasCtrl', function ($scope, lodash, $http,Flash, $location, config, tipo_zonasApi, eventosApi, $filter, $window) {
     $scope.id = $window.sessionStorage.getItem('id');

          $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }  
        

        eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
            $scope.eventos = data.data;

            console.log(data)
        });

        $scope.doGuardar = function() {
        	 if (typeof $scope.eef.id === 'undefined') {
        	 	 eventosApi.save({ id: $scope.id, act: 'etapa' },$scope.eef,
                function(data) {
                    console.log(data);
                   
                });

            eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                $scope.eventos = data.data;

                console.log(data)
            });

        	 }
        	 else{
        	 	console.log("estamos editando")
                eventosApi.update({ id: $scope.id, act: 'etapa',id2:$scope.eef.id },$scope.eef,
                    function(data) {
                        var message = 'etapa Editada!';
                        Flash.create('success', message, 'custom-class');
                         $scope.eef = [];
                        $scope.buttons.register = "Guardar";
                    });
        	 }
           
        }

        $scope.doEliminar = function() {
            eventosApi.destroy({ id: $scope.id, act: 'etapa',id2:$scope.eef.id},
                function(data) {
                    var message = 'etapa Editada';
                    Flash.create('success', message, 'custom-class');
                    $scope.eef = [];
                    $scope.buttons.register = "Guardar";
                });


        };

        $scope.editar = function(id) {
            console.log(id)
            var result = lodash.find($scope.eventos.etapas, {
                "id": id
            });
            var s = lodash.findIndex($scope.eventos.etapas, result);
            $scope.eef = $scope.eventos.etapas[s];
               $scope.buttons.register = "Editar";
        }
  });
