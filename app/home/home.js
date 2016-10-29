'use strict';

angular.module('theEatory.home', ['ngRoute'])

.controller('HomeCtrl', function($scope, $http) {

  $http.get('data/pictures.json')
    .then(function(res){
      $scope.pictures = res.data.pictureData;
    });

});

