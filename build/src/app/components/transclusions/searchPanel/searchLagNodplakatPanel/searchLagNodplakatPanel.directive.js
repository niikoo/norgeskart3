angular.module('searchLagNodplakatPanel').directive('searchLagNodplakatPanel', [function () {
    return {
      templateUrl: 'components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanel.html',
      restrict: 'A',
      controller: 'searchLagNodplakatPanelController',
      link: function () {
      }
    };
  }]);