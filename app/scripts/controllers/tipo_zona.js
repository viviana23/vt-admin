'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:TipoZonaCtrl
 * @description
 * # TipoZonaCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('TipoZonaCtrl', function($scope, lodash, $http, $location, config, tipo_zonasApi, $filter, $window) {
        $scope.myvalue = false;
        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }
        tipo_zonasApi.get({}, function(data) {
            $scope.tipo_zona = data.data;
            //  console.log(data)

        });


        $scope.doGuardar = function() {
            if (typeof $scope.tzef.id === 'undefined') {
                tipo_zonasApi.save($scope.tzef, function(data) {
                    $scope.tzef = {};
                    swal("Color de entrada Registrado!", "", "success");
                    console.log(data);

                });

                tipo_zonasApi.get({}, function(data) {
                    $scope.tipo_zona = data.data;
                    //  console.log(data)


                });
            } else {

                console.log("estamos editando");
                tipo_zonasApi.update({ id: $scope.tzef.id }, $scope.tzef,
                    function(data) {
                        swal("Color Editado!", "", "success");
                        $scope.myvalue = false;

                        $scope.tzef = {};
                        $scope.buttons.register = "Guardar";
                    });

            }

        }

        $scope.doEliminar = function() {
            swal({ title: "Desea eliminar esta Zona?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                function() {
                    tipo_zonasApi.destroy({ id: $scope.tzef.id },
                        function(data) {

                            $scope.tzef = {};
                            $scope.buttons.register = "Guardar";
                            swal("Zona Eliminada!", "", "success");
                        });

                    $scope.myvalue = false;
                    tipo_zonasApi.get({}, function(data) {
                        $scope.tipo_zona = data.data;
                        console.log(data)

                    });
                });



        };
        $scope.editar = function(id) {
            $scope.myvalue = true;
            console.log(id)
            var result = lodash.find($scope.tipo_zona, {
                "id": id
            });
            var s = lodash.findIndex($scope.tipo_zona, result);
            $scope.tzef = $scope.tipo_zona[s];
            $scope.buttons.register = "Editar";
        }

        $scope.Cancelar = function(id) {
            $scope.tzef = {};
            $scope.myvalue = false;

        }

    });
