'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:EtapasCtrl
 * @description
 * # EtapasCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('EtapasCtrl', function($scope, lodash, $http, $location, config, tipo_zonasApi, eventosApi, $filter, $window) {
        $scope.myvalue = false;
        $scope.id = $window.sessionStorage.getItem('id');
        $scope.usuario = localStorage.getItem('usuario');
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
                eventosApi.save({ id: $scope.id, act: 'etapa' }, $scope.eef,
                    function(data) {
                        console.log(data);

                    });
                $scope.eef = {};
                swal("Etapa Registrada!", "", "success");
                eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                    $scope.eventos = data.data;

                    console.log(data)
                });

            } else {
                console.log("estamos editando")
                $scope.HHmmss = moment($scope.eef.hora_fin).format('yyyy:mm:dd');
                eventosApi.update({ id: $scope.id, act: 'etapa', id2: $scope.eef.id }, $scope.eef,
                    function(data) {
                        swal("Etapa Editada!", "", "success");
                        $scope.myvalue = false;
                        $scope.eef = {};
                        $scope.buttons.register = "Guardar";
                    });
            }

        }

        $scope.doEliminar = function() {
            swal({ title: "Desea eliminar esta Zona?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                function() {
                    eventosApi.destroy({ id: $scope.id, act: 'etapa', id2: $scope.eef.id },
                        function(data) {

                            $scope.eef = {};
                            $scope.buttons.register = "Guardar";
                            swal("Etapa Eliminada!", "", "success");
                        });
                    $scope.myvalue = false;
                });
        };

        $scope.editar = function(id) {
            $scope.myvalue = true;
            console.log(id)
            var result = lodash.find($scope.eventos.etapas, {
                "id": id
            });
            var s = lodash.findIndex($scope.eventos.etapas, result);
            $scope.eef = $scope.eventos.etapas[s];
            $scope.buttons.register = "Editar";
        }

        $scope.Cancelar = function(id) {
            $scope.eef = {};
            $scope.myvalue = false;



        }
    });
