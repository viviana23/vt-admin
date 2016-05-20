'use strict';

/**
 * @ngdoc function
 * @name panelNgApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the panelNgApp
 */
angular.module('panelNgApp')
    .controller('UsuariosCtrl', function($scope, $window) {

    }).controller('ModalInstanceCtrl', function($scope, $uibModalInstance, id, eventosApi) {

        $scope.id = id;
        $scope.selected = {
            id: $scope.id
        };

        $scope.ok = function() {
            //$uibModalInstance.close('ok');
            eventosApi.save({ id: $scope.id, act: 'users' }, $scope.eef, function(data) {
                $scope.eef = [];
                console.log(data);

            });



        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    });
