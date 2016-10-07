'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('LoginCtrl', function($scope, $http, $location, jwtHelper) {
        $scope.email = "gKuphal@example.com";
        $scope.doLogin = function() {
            $http({
                url: 'http://192.168.0.102:8080/api/v1/angular2login',
                method: 'POST',
                data: { email: $scope.email, password: $scope.password }
            }).then(function(response) {
                
                console.log(response.data.token);
                localStorage.setItem('id_token', response.data.token);
                $scope.token = response.data.token;
                $scope.decode = jwtHelper.decodeToken($scope.token);
                localStorage.setItem('usuario', $scope.decode.name);
                //console.log("decodificacion",$scope.decode);
                $location.path("/list_eventos")
                    //  store.set('jwt', response.data.token);

            }, function(error) {
                console.log(error.data);
            });
        }

    });
