'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:TipoZonaCtrl
 * @description
 * # TipoZonaCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
  .controller('TipoZonaCtrl', function($scope, lodash, $http, Flash, $location, config, tipo_zonasApi, $filter, $window) {

        $scope.buttons = {
            "register": "Guardar",
            "cancer": "Cancelar"
        }
        tipo_zonasApi.get({}, function(data) {
            $scope.tipo_zona = data.data;
            //  console.log(data)

        });


        $scope.doGuardar = function() {
            if (typeof $scope.tzef.id === 'undefined') {
                tipo_zonasApi.save($scope.tzef
                	,function(data) {
                        console.log(data);

                    });

                tipo_zonasApi.get({}, function(data) {
                    $scope.tipo_zona = data.data;
                    //  console.log(data)

               
                });
            } else {

                console.log("estamos editando");
                tipo_zonasApi.update({id:$scope.tzef.id},$scope.tzef,
                    function(data) {
                        var message = 'color de zona Editado!';
                        Flash.create('success', message, 'custom-class');
                         $scope.tzef = [];
                        $scope.buttons.register = "Guardar";
                    });

            }

        }
        $scope.editar = function(id) {
            console.log(id)
            var result = lodash.find($scope.tipo_zona, {
                "id": id
            });
            var s = lodash.findIndex($scope.tipo_zona, result);
            $scope.tzef = $scope.tipo_zona[s];
            $scope.buttons.register = "Editar";
        }
        
  });
