'use strict';

// Declare app level module which depends on views, and components
angular.module('theEatory', [
  'ngRoute',
  'theEatory.home',
  'theEatory.location',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  //$locationProvider.html5Mode(true);

  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });

  $routeProvider.when('/home', { redirectTo: '/' });

  $routeProvider.when('/location', {
    templateUrl: 'location/location.html',
    controller: 'LocationCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
