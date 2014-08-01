angular.module('boundstate.scrollToMe', [])

.factory('uuid', function () {
  return function () {
    function _p8(s) {
      var p = (Math.random().toString(16) + '000000000').substr(2, 8);
      return s ? '-' + p.substr(0, 4) + '-' + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  };
})

.directive('scrollToMe', function($timeout, $window, uuid) {
  return {
    link: function (scope, el, attrs) {
      scope.$watch(attrs.scrollToMe, function (val) {
        if (angular.isDefined(val) && val) {
          $timeout(function () {
            var id = angular.element(el).attr('id');
            if (!id) {
              id = uuid();
              angular.element(el).attr('id', id);
            }
            $window.smoothScroll.animateScroll(null, '#' + id, {
              updateURL: false
            });
          });
        }
      }, true);
    }
  };
})

;