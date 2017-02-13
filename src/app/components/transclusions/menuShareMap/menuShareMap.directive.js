angular.module('menuShareMap')
  .directive('menuShareMap', [
    () => ({
      templateUrl: 'components/transclusions/menuShareMap/menuShareMap.html',
      restrict: 'A',
      controller: 'menuShareMapController',
      link: () => {},
    })
  ]);
