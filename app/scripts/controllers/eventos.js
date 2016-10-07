'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:EventosCtrl
 * @description
 * # EventosCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('EventosCtrl', function($scope, lodash, $http, $location, config, eventosApi, lugarApi, $window, $uibModal, $log) {

        $scope.myvalue = false;
        $scope.id = $window.sessionStorage.getItem('id');
        $scope.usuario = localStorage.getItem('usuario');

        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }

        lugarApi.get({}, function(data) {
            $scope.lugares = data.data;
            console.log(data)
        });

        if ($scope.id = $window.sessionStorage.getItem('id')) {
            $scope.buttons.register = "Editar";
            $scope.myvalue = true;
            eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                $scope.eventos = data.data;
                $scope.eef = $scope.eventos;

                console.log(data)

            });

        }

        $scope.consultaPersonalizada = function(op) {
            if ((op.pivot.rol === 'admin') || (op.pivot.rol === 'user')) {
                return true;
            } else {
                return false;
            }
        }


        $scope.doGuardar = function() {

            $scope.HHmmss = moment($scope.eef.hora_evento).format('hh:mm');
            if (typeof $scope.eef.id === 'undefined') {

                eventosApi.save({ nombre: $scope.eef.nombre, categoria: $scope.eef.categoria, lugar: "pues si", direccion: $scope.eef.direccion, fecha_evento: $scope.eef.fecha_evento, hora_evento: $scope.HHmmss, lugar_id: $scope.eef.lugar_id, estatus: $scope.eef.estatus },
                    function(response) {
                        swal("Evento Registrado!", "", "success");
                        console.log(response.data.id);
                        $window.sessionStorage.setItem('id', response.data.id);
                        $scope.id = response.data.id;
                        $location.url("/zonas");
                    });

            } else {

                console.log("estamos editando");

                eventosApi.update({ id: $scope.eef.id }, $scope.eef,
                    function(data) {
                        $scope.myvalue = false;
                        swal("Evento Editado!", "", "success");
                        $scope.eef = {};
                        $scope.buttons.register = "Guardar";

                    });

            }

        }

        $scope.doEliminar = function() {
            swal({ title: "Desea eliminar este Evento?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                function() {
                    eventosApi.destroy({ id: $scope.eef.id },
                        function(data) {
                            $scope.eef = {};
                            $scope.buttons.register = "Guardar";
                            swal("Evento Eliminado!", "", "success");
                        });
                });

        };

        $scope.editar = function(id) {
            console.log(id)
            eventosApi.destroy({ id: $scope.id, act: 'users', id2: id },
                function(data) {
                    $scope.eef = {};
                    $scope.buttons.register = "Guardar";
                    eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                        $scope.eventos = data.data;

                        console.log(data)
                    });
                });


        }

        $scope.Cancelar = function(id) {
            $scope.eef = {};
            $scope.myvalue = false;



        }

        //$scope.items = ['item1', 'item2', 'item3'];

        $scope.animationsEnabled = true;

        $scope.open = function(size) {

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    id: function() {
                        return $scope.id;
                    }
                }
            });

            modalInstance.result.then(function(selectedItem) {
                $scope.selected = selectedItem;
            }, function() {
                eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                    $scope.eventos = data.data;

                    console.log(data)
                });
            });
        };

        $scope.toggleAnimation = function() {
            $scope.animationsEnabled = !$scope.animationsEnabled;
        };


    });
