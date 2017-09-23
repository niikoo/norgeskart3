angular.module('mainMenuOverlay').directive('mainMenuOverlay', [
  'localStorageFactory',
  function (localStorageFactory) {
    return {
      templateUrl: 'components/overlays/mainMenuOverlay/mainMenuOverlay.html',
      restrict: 'A',
      link: function (scope) {
        function _initMainMenuOverlay() {
          var isMainMenuOpen = localStorageFactory.get('mainMenuIsOpen');
          if (isMainMenuOpen !== null) {
            if (isMainMenuOpen) {
              scope.openNav();
            } else {
              scope.closeNav();
            }
          }
        }
        $(document).ready(function () {
          _initMainMenuOverlay();
        });
      }
    };
  }
]);