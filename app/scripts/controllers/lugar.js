'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:LugarCtrl
 * @description
 * # LugarCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('LugarCtrl', function($scope, lodash, $http, Flash, $location, config, lugarApi, $filter, $window) {

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
                        var message = 'lugar Editado!';
                        Flash.create('success', message, 'custom-class');
                        $scope.lef = [];
                        $scope.buttons.register = "Guardar";
                    });

            }

        }

        $scope.doEliminar = function() {
            lugarApi.destroy({ id: $scope.lef.id },
                function(data) {
                    var message = 'color de zona Editado!';
                    Flash.create('success', message, 'custom-class');
                    $scope.lef = [];
                    $scope.buttons.register = "Guardar";
                });


        };

        $scope.editar = function(id) {
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

    });
