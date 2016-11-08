'use strict';

angular.module('theEatory.home', ['ngRoute'])

.controller('HomeCtrl', function($scope, $http, $window, $anchorScroll) {

  const BASE_URL = "http://lorempixel.com/[width]/[height]/food/[id]"

  $scope.showGoToTop = false;

  $http.get('data/pictures.json')
    .then(function(res){
      $scope.pictures = res.data.pictureData; // array of picture objects

      var picturesByCategory = {};
      for(let i = 0; i < $scope.pictures.length; i++) {
        if(!picturesByCategory[$scope.pictures[i].category]) {
          picturesByCategory[$scope.pictures[i].category] = [];
        }
        picturesByCategory[$scope.pictures[i].category].push($scope.pictures[i]);
      }

      // An object whose keys are categories and values are arrays
      // of picture objects
      $scope.picturesByCategory = picturesByCategory;
    });


  $scope.pictureSrc = function(picture){
      return BASE_URL.replace("[width]", picture.width)
                     .replace("[height]", picture.height)
                     .replace("[id]", picture.id);
  };

  $scope.getCategoryId = function(category) {
    return "category-" + category.toLowerCase();
  };

  $scope.scrollTo = function(id) {
    $anchorScroll(id);
  };
});
