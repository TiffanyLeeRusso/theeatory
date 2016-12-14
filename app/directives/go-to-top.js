'use strict'

angular.module('theEatory.goToTop', [])

.directive('goToTop', function($window) {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element) {
      angular.element($window).bind("scroll", function(e) {
        if (this.pageYOffset >= 300) {
          element.removeClass("hidden");
        } else {
          element.addClass("hidden");
        }
      });
    }
  };
});
