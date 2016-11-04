angular.module('theEatory.listItem', [])

.directive('listItem', function() {
  return {
    restrict: 'E',
    // The directive needs to run before ng-repeat by using a higher priority
    // (the ngRepeat priority is 1000) so the directive can fill in the
    // template before it is cloned.
    // http://stackoverflow.com/a/15962707
    priority: 1001,
    scope: false,
    templateUrl: 'directives/list-item.html',
    controller: ['$scope', function($scope) {
    }],
    link: function(scope, element) {
    }
  };
});
