angular.module('theEatory.gridListItem', [])

.directive('gridListItem', function() {
  return {
    restrict: 'E',
    scope: {
    },
    template: '<li class="grid-item">Picture</li>',
    controller: ['$scope', function($scope) {
    }],
    link: function(scope, element) {
    }
  };
});
