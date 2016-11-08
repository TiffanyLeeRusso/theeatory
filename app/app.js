'use strict';

// Declare app level module which depends on views, and components
angular.module('theEatory', [
  'ngRoute',
  'theEatory.home',
  'theEatory.location',
  'theEatory.listItem',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // TODO; hashPrefix is for in-page links
  //$locationProvider.html5Mode(true).hashPrefix('!');

  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.when('/home', { redirectTo: '/' });

  $routeProvider.when('/location', {
    templateUrl: 'views/location.html',
    controller: 'LocationCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
