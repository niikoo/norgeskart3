angular.module('menuPrint')
  .directive('menuPrint', [
    () => ({
      templateUrl: 'components/transclusions/menuPrint/menuPrint.html',
      restrict: 'A',
      controller: 'menuPrintController',
      link: () => {},
    }),
  ]);
