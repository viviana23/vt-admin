'use strict';

/**
 * @ngdoc service
 * @name panelNgApp.eventos
 * @description
 * # eventos
 * Service in the panelNgApp.
 */
angular.module('panelNgApp')
    .factory('eventosApi', function($resource,config) {
        //return $resource(config.url + '/v1/evento/:id/:act/:id2');// Note the full endpoint address

         var StoreData = $resource(config.url +  '/v1/evento/:id/:act/:id2', {
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

     