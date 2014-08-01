angular.module('boundstate.scrollToMe', [])

.directive('scrollToMe', function($timeout, $window) {
  return {
    link: function (scope, el, attrs) {
      scope.$watch(attrs.scrollToMe, function (val) {
        if (angular.isDefined(val) && val) {
          $timeout(function () {
            var id = angular.element(el).attr('id');
            if (id) {
              $window.smoothScroll.animateScroll(null, '#' + id, {
                updateURL: false,
                offset: attrs.offset || 0
              });
            }
          });
        }
      }, true);
    }
  };
})

;