'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:ZonaetapaCtrl
 * @description
 * # ZonaetapaCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('ZonaetapaCtrl', function($scope, lodash, $http, $location, config, eventosApi, $filter, $window) {
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


        /*
        eventosApi.get({}, function(data) {
            $scope.zonaetapa = data.data;
            //  console.log(data)

        });

*/
        $scope.doGuardar = function() {
            if (typeof $scope.zeef.id === 'undefined') {
                eventosApi.save({ id: $scope.id, act: 'zonaetapa' }, $scope.zeef, function(data) {
                    $scope.zeef = {};
                    swal("Zona Agregada Etapa!", "", "success");
                    console.log(data);

                });
                eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                    $scope.eventos = data.data;

                    console.log(data)
                });
            } else {

                console.log("estamos editando");

                eventosApi.update({ id: $scope.id, act: 'zonaetapa', id2: $scope.zeef.id }, $scope.zeef,
                    function(data) {
                        swal("Editado!", "", "success");
                        $scope.myvalue = false;
                        $scope.zeef = {};
                        $scope.buttons.register = "Guardar";
                    });

            }

        }

        $scope.doEliminar = function() {
            swal({ title: "Desea eliminar esta Zona de esta Etapa?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                function() {
                    eventosApi.destroy({ id: $scope.id, act: 'zonaetapa', id2: $scope.zeef.id },
                        function(data) {
                            //$scope.formzonas = {};
                            $scope.zeef = {};
                            $scope.buttons.register = "Guardar";
                            swal("Zona Eliminada de Etapa!", "", "success");
                        });

                    $scope.myvalue = false;
                    eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                        $scope.eventos = data.data;

                        console.log(data)
                    });
                });



        };
        $scope.editar = function(id, index, indexZona) {
            $scope.myvalue = true;
            var data = $scope.eventos.etapas[index].zonas[indexZona].pivot;
            console.log(data)
            $scope.zeef = data;
            $scope.buttons.register = "Editar";
        }

        $scope.Cancelar = function(id) {
            $scope.zeef = {};
            $scope.myvalue = false;



        }

    });
