'use strict';

angular.module('theEatory.modal', [])
.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, foodItem, reviews) {
  $scope.foodItem = foodItem;
  $scope.reviews = reviews;

  $scope.submit = function() {
    $uibModalInstance.close();
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };

});
