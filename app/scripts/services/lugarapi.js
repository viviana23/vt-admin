'use strict';

/**
 * @ngdoc service
 * @name panelNgApp.lugarapi
 * @description
 * # lugarapi
 * Factory in the panelNgApp.
 */
angular.module('panelNgApp')
  .factory('lugarApi', function($resource,config) {
       
         var StoreData = $resource(config.url +  '/v1/lugar/:id', {
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
            },
            destroy: {
                method: 'DELETE',
                isArray: false
            }
        });
        return StoreData; // Note the full endpoint address
    });
