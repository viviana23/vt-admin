'use strict';

/**
 * @ngdoc service
 * @name panelNgApp.usuariosapi
 * @description
 * # usuariosapi
 * Service in the panelNgApp.
 */
angular.module('panelNgApp')
  .service('usuariosApi', function ($resource,config) {
   var StoreData = $resource(config.url +  '/v1/user', {
            
        }, {
            save: {
                method: 'POST',
                isArray: false
            },
            update: {
                method: 'PUT',
                isArray: false
            }
        });
        return StoreData; // Note the full endpoint address
  });
