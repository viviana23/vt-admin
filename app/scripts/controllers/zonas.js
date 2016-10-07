'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:ZonasCtrl
 * @description
 * # ZonasCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('ZonasCtrl', function($scope, $route, lodash, $http, $location, config, tipo_zonasApi, eventosApi, $filter, $window, $uibModal, $log) {
        
        $scope.myvalue = false;
        $scope.id = $window.sessionStorage.getItem('id');
        $scope.usuario = localStorage.getItem('usuario');
        $scope.defaultForm = {}

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
                        $scope.formzonas={};
                        $scope.zef = {};
                        swal("Zona Registrada!", "", "success");
                        console.log(response.data.id);
                        $window.sessionStorage.setItem('id_zona', response.data.id);
                        $scope.id_zona = response.data.id;
                    //$scope.formzonas.$invalid = true;

                    $route.reload();
                    });

                eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                    $scope.eventos = data.data;

                    console.log(data)
                });

            } else {
                console.log("estamos editando")
                eventosApi.update({ id: $scope.id, act: 'zona', id2: $scope.zef.id }, $scope.zef,
                    function(data) {
                        swal("Zona Editada!", "", "success");
                        $scope.myvalue = false;
                        $scope.zef = {};
                        $scope.buttons.register = "Guardar";
                         $route.reload();

                    });
            }

        }

        $scope.doEliminar = function() {
            swal({ title: "Desea eliminar esta Zona?", type: "warning", showCancelButton: true, confirmButtonColor: "#DD6B55", confirmButtonText: "Si, Eliminar!", closeOnConfirm: false },
                function() {
                    eventosApi.destroy({ id: $scope.id, act: 'zona', id2: $scope.zef.id },
                        function(data) {
                            $route.reload();
                            $scope.zef = {};
                            $scope.buttons.register = "Guardar";
                            swal("Zona Eliminada!", "", "success");
                        });

                    $scope.myvalue = false;
                    eventosApi.get({ id: $scope.id, act: 'all' }, function(data) {
                        $scope.eventos = data.data;

                        console.log(data)
                    });
                });



        };



        $scope.editar = function(tipo, id) {

            if (tipo === 'PorZona') { $scope.myvalue = true; } else {
                $scope.myvalue = false;
            }

            console.log(id)
            var result = lodash.find($scope.eventos.zonas, {
                "id": id
            });
            var s = lodash.findIndex($scope.eventos.zonas, result);
            $scope.zef = $scope.eventos.zonas[s];
            $scope.buttons.register = "Editar";



        }

        $scope.Cancelar = function(id) {
             //$scope.formzonas={};
            $scope.zef = {};
            $scope.myvalue = false;
             $route.reload();
             //$scope.formzonas.$invalid=true;

        }

    }).directive('numbersOnly', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    // this next if is necessary for when using ng-required on your input. 
                    // In such cases, when a letter is typed first, this parser will be called
                    // again, and the 2nd time, the value will be undefined
                    if (inputValue == undefined) return ''
                    var transformedInput = inputValue.replace(/[^0-9.]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    }).directive('numbersPunto', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function(inputValue) {
                    // this next if is necessary for when using ng-required on your input. 
                    // In such cases, when a letter is typed first, this parser will be called
                    // again, and the 2nd time, the value will be undefined
                    if (inputValue == undefined) return ''
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    });
