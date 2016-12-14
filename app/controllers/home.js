'use strict';

angular.module('theEatory.home', ['ngRoute'])

.controller('HomeCtrl', function($scope, $http, $window, $anchorScroll, $uibModal) {

  const BASE_URL = "http://lorempixel.com/[width]/[height]/food/[id]"

  $scope.showGoToTop = false;

  $http.get('data/food.json')
    .then(function(res){
      $scope.food = res.data.foodData; // array of objects describing our menu items

      var foodByCategory = {};
      for(let i = 0; i < $scope.food.length; i++) {
        if(!foodByCategory[$scope.food[i].category]) {
          foodByCategory[$scope.food[i].category] = [];
        }
        foodByCategory[$scope.food[i].category].push($scope.food[i]);
      }

      // An object whose keys are categories and values are arrays
      // of food objects
      $scope.foodByCategory = foodByCategory;
    });


  $scope.pictureSrc = function(foodItem){
    return BASE_URL.replace("[width]", foodItem.width)
                   .replace("[height]", foodItem.height)
                   .replace("[id]", foodItem.id);
  };

  $scope.getCategoryId = function(category) {
    return "category-" + category.toLowerCase();
  };

  $scope.scrollTo = function(id) {
    $anchorScroll(id);
  };

  $scope.openReview = function(foodItem) {
    var modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'views/review-modal.html',
      controller: 'ModalInstanceCtrl',
      size: 'lg',
      resolve: {
        foodItem: foodItem,
        reviews: function () {
          return ["review1", "Review 2"];
        }
      }
    });
  };
});
