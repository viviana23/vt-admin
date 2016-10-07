'use strict';

/**
 * @ngdoc overview
 * @name panelNgApp
 * @description
 * # panelNgApp
 *
 * Main module of the application.
 */
angular
    .module('panelNgApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'angular-storage',
        'angular-jwt',
        'nya.bootstrap.select',
        '720kb.datepicker',
        'ngMaterialDatePicker',
        'angularMoment',
        'xeditable',
        'ngLodash',
        'flash',
        'ui.bootstrap',
        'ng-sweet-alert',
       
        'angularUtils.directives.dirPagination'

    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/etapas', {
                templateUrl: 'views/etapas.html',
                controller: 'EtapasCtrl',
                controllerAs: 'etapas'
            })
            .when('/eventos', {
                templateUrl: 'views/eventos.html',
                controller: 'EventosCtrl',
                controllerAs: 'eventos'
            })
            .when('/zonas', {
                templateUrl: 'views/zonas.html',
                controller: 'ZonasCtrl',
                controllerAs: 'zonas'
            })
            .when('/tipo_zona', {
                templateUrl: 'views/tipo_zona.html',
                controller: 'TipoZonaCtrl',
                controllerAs: 'tipoZona'
            })
            .when('/lugar', {
                templateUrl: 'views/lugar.html',
                controller: 'LugarCtrl',
                controllerAs: 'lugar'
            })
            .when('/filas', {
                templateUrl: 'views/filas.html',
                controller: 'FilasCtrl',
                controllerAs: 'filas'
            })
            .when('/zonaetapa', {
                templateUrl: 'views/zonaetapa.html',
                controller: 'ZonaetapaCtrl',
                controllerAs: 'zonaetapa'
            })
            .when('/evento_usuario', {
                templateUrl: 'views/evento_usuario.html',
                controller: 'EventoUsuarioCtrl',
                controllerAs: 'eventoUsuario'
            })
            .when('/list_eventos', {
                templateUrl: 'views/list_eventos.html',
                controller: 'ListEventosCtrl',
                controllerAs: 'listEventos'
            })
            .when('/usuarios', {
                templateUrl: 'views/usuarios.html',
                controller: 'UsuariosCtrl',
                controllerAs: 'usuarios'
            })
            .when('/list_zonas', {
                templateUrl: 'views/list_zonas.html',
                controller: 'ListZonasCtrl',
                controllerAs: 'listZonas'
            })
            .when('/devolucion', {
                templateUrl: 'views/devolucion.html',
                controller: 'DevolucionCtrl',
                controllerAs: 'devolucion'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).config(function Config($httpProvider, jwtInterceptorProvider) {
        jwtInterceptorProvider.tokenGetter = ['config', function(config) {

            return localStorage.getItem('id_token');

        }];
        $httpProvider.interceptors.push('jwtInterceptor');
    }).constant("config", {
        "url": "http://192.168.0.102:8080/api",
        "port": "80"
    }).config(function($mdDateLocaleProvider) {
        $mdDateLocaleProvider.formatDate = function(date) {
            return moment(date).format('hh:mm:ss');
        }
    })
