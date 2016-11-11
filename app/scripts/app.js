'use strict';

/**
 * @ngdoc overview
 * @name treeYoApp
 * @description
 * # treeYoApp
 *
 * Main module of the application.
 */
angular
  .module('treeYoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.tree'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
