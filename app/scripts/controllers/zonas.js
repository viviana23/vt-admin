'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:ZonasCtrl
 * @description
 * # ZonasCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('ZonasCtrl', function($scope, lodash, $http, Flash, $location, config, tipo_zonasApi, eventosApi, $filter, $window) {
        $scope.id = $window.sessionStorage.getItem('id');

        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }

        tipo_zonasApi.get({}, function(data) {
            $scope.tipo_zona = data.data;
            //  console.log(data)

        });

        eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
            $scope.eventos = data.data;

            console.log(data)
        });

        $scope.doGuardar = function() {
            if (typeof $scope.zef.id === 'undefined') {
                eventosApi.save({ id: $scope.id, act: 'zona' }, $scope.zef,
                    function(response) {
                        $scope.zef = [];
                        console.log(response.data.id);
                        $window.sessionStorage.setItem('id_zona', response.data.id);
                        $scope.id_zona = response.data.id;
                        //$location.url("/filas");
                    });

                eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                    $scope.eventos = data.data;

                    console.log(data)
                });

            } else {
                console.log("estamos editando")
                eventosApi.update({ id: $scope.id, act: 'zona', id2: $scope.zef.id }, $scope.zef,
                    function(data) {
                        var message = 'Zona Editada!';
                        Flash.create('success', message, 'custom-class');
                        $scope.zef = [];
                        $scope.buttons.register = "Guardar";
                    });
            }

        }

        $scope.doEliminar = function() {
            eventosApi.destroy({ id: $scope.id, act: 'zona', id2: $scope.zef.id },
                function(data) {
                    var message = 'color de zona Editado!';
                    Flash.create('success', message, 'custom-class');
                    $scope.zef = [];
                    $scope.buttons.register = "Guardar";
                });


        };

        $scope.editar = function(id) {
            
            console.log(id)
            var result = lodash.find($scope.eventos.zonas, {
                "id": id
            });
            var s = lodash.findIndex($scope.eventos.zonas, result);
            $scope.zef = $scope.eventos.zonas[s];
            $scope.buttons.register = "Editar";
        }

    });
