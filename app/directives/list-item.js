angular.module('theEatory.listItem', [])

.directive('listItem', function() {
  return {
    restrict: 'E',
    scope: false,
    templateUrl: 'directives/list-item.html',
    controller: ['$scope', function($scope) {
    }],
    link: function(scope, element) {
    }
  };
});
