angular.module('moveableOverlay').controller('moveableOverlayController', [
  '$scope',
  'moveableOverlayFactory',
  '$element',
  function ($scope, moveableOverlayFactory, $element) {
    if ($element.scope) {
      $element = $($element);
    }
    $scope.showElevationProfilePage1 = function () {
      $scope.menuElevationProfileLayout = 'page1';
    };
    $scope.showElevationProfilePage2 = function () {
      $scope.menuElevationProfileLayout = 'page2';
    };
    $scope.menuElevationProfileLayout = 'page1';
    $scope.menuShowMoveableOverlay = function (id) {
      // $scope.overlay = moveableOverlayFactory.getActiveOverlay();
      var overlay = moveableOverlayFactory.getActiveOverlayById(id);
      if (overlay !== undefined) {
        var moveableElements = document.getElementsByClassName('moveableOverlay');
        for (var i = 0; i < moveableElements.length; i++) {
          var element = moveableElements[i];
          if (element.offsetWidth + element.offsetLeft > $(document.body).width() || element.offsetHeight + element.offsetTop > $(document.body).height()) {
            moveableOverlayFactory.setPositionForActiveOverlay(19, 12);
            element.style.left = 19 + 'px';
            element.style.top = 12 + 'px';
          }
        }
        $scope.header = overlay.headingTitle;
        $scope.headerIcon = overlay.headingIcon;
        return moveableOverlayFactory.isOverlayVisibleById(id);
      }
      return false;
    };
  }
]);