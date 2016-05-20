'use strict';

/**
 * @ngdoc service
 * @name panelNgApp.zonasapi
 * @description
 * # zonasapi
 * Service in the panelNgApp.
 */
angular.module('panelNgApp')
  .factory('tipo_zonasApi', function ($resource,config) {
 
     var StoreData = $resource(config.url +  '/v1/tipo_zona/:id', {
            id: '@id'
        }, {
            query: {
                method: 'GET',
                isArray: false
            },
            save: {
                method: 'POST',
                isArray: false
            },
            update: {
                method: 'PUT',
                isArray: false
            }
        });
        return StoreData; // Note the full endpoint addres
  });
