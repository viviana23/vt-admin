'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:LugarCtrl
 * @description
 * # LugarCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('LugarCtrl', function($scope, lodash, $http, $location, config, lugarApi, $filter, $window) {
        $scope.myvalue = false;
        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar",
            "eliminar": "Eliminar"
        }
        lugarApi.get({}, function(data) {
            $scope.lugar = data.data;
            //  console.log(data)

        });



        $scope.doGuardar = function() {
            if (typeof $scope.lef.id === 'undefined') {
                lugarApi.save($scope.lef, function(data) {
                    
                    $scope.lef = {};
                    swal("Lugar Registrado!", "", "success");
                    console.log(data);

                });

                lugarApi.get({}, function(data) {
                    $scope.lugar = data.data;
                    //  console.log(data)


                });
            } else {

                console.log("estamos editando");
                lugarApi.update({ id: $scope.lef.id }, $scope.lef,
                    function(data) {
                        swal("Lugar Editado!", "", "success");
                        $scope.myvalue = false;
                        $scope.lef = {};
                        $scope.buttons.register = "Guardar";
                    });

            }

        }

        $scope.doEliminar = function() {
            swal({ title: "Desea eliminar esta Zona?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                function() {
                    lugarApi.destroy({ id: $scope.lef.id },
                        function(data) {
                           
                            $scope.lef = {};
                            $scope.buttons.register = "Guardar";
                            swal("Lugar Eliminado!", "", "success");


                        });
                    $scope.myvalue = false;
                    lugarApi.get({}, function(data) {
                        $scope.lugar = data.data;
                        //  console.log(data)

                    });
                });

        };

        $scope.editar = function(id) {
            $scope.myvalue = true;
            console.log(id)
            var result = lodash.find($scope.lugar, {
                "id": id
            });
            var s = lodash.findIndex($scope.lugar, result);
            $scope.lef = $scope.lugar[s];
            $scope.buttons.register = "Editar";
        }
        $scope.$on('onBeforeUnload', function(e, confirmation) {
            $window.sessionStorage.removeItem("token");
        });
        $scope.$on('onUnload', function(e) {
            console.log('leaving page'); // Use 'Preserve Log' option in Console
        });

        $scope.Cancelar = function(id) {
            $scope.lef = {};
            $scope.myvalue = false;

        }

    });
