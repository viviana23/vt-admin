'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:FilasCtrl
 * @description
 * # FilasCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('FilasCtrl', function($scope, $http, lodash, $location, $log, config, tipo_zonasApi, eventosApi, $filter, $window) {
        $scope.id = $window.sessionStorage.getItem('id');
        $scope.id_zona = $window.sessionStorage.getItem('id_zona');
        $scope.indexzonas = $window.sessionStorage.getItem('indexzonas');

        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }



        eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
            $scope.eventos = data.data;

            console.log(data)
            $log.log(data);
        });

        $scope.consultaPersonalizada = function(op) {
            if ((op.tipo === 'mesa') || (op.tipo === 'fila')) {
                return true;
            } else {
                return false;
            }
        }

        $scope.doGuardar = function(fef) {
            if (typeof fef.id === 'undefined') {
                console.log($scope.fef);
                eventosApi.save({ id: $scope.id, act: 'fila' }, { descripcion: fef.descripcion, capacidad: fef.capacidad, tipo: fef.tipo, estatus: fef.estatus, zona_id: $scope.id_zona }, function(data) {
                    console.log(data);

                });
            } else {

                console.log("estamos editando");

                eventosApi.update({ id: $scope.id, act: 'fila', id2: fef.id }, { descripcion: fef.descripcion, capacidad: fef.capacidad, tipo: fef.tipo, estatus: fef.estatus, zona_id: $scope.id_zona },
                    function(data) {
                        var message = 'zonaetapa Editada!';
                        Flash.create('success', message, 'custom-class');
                        $scope.fef = [];
                        $scope.buttons.register = "Guardar";
                    });

            }
        }

        $scope.doGuardarmapa = function(fef) {

            eventosApi.save({ id: $scope.id, act: 'table', id2: $scope.id_zona }, fef.mapa, function(data) {
                console.log(data);

            });

        }
        $scope.editar = function(id, index) {
            var data = $scope.eventos.zonas[$scope.indexzonas].filas[index];
            console.log(data)
            $scope.fef = data;

            $scope.buttons.register = "Editar";
        }
    });
