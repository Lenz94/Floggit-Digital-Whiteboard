'use strict';

/**
 * @ngdoc overview
 * @name floggitDigitalWhiteboardApp
 * @description
 * # floggitDigitalWhiteboardApp
 *
 * Main module of the application.
 */
angular
  .module('floggitDigitalWhiteboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule',
    'ui.bootstrap'
  ])
  .config(['localStorageServiceProvider',
    function (localStorageServiceProvider) {
      localStorageServiceProvider.setPrefix('ls');
    }
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/todolist', {
        templateUrl: 'views/todolist.html',
        controller: 'TodoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
