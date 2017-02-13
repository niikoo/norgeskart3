angular.module('menuShareMap')
  .controller('menuShareMapController', ['$location', '$scope', '$window', 'ISY.EventHandler',
    ($location, $scope, $window, eventHandler) => {
      const getUrl = () => $location.absUrl();

      const getEncodedUrl = () => encodeURIComponent(getUrl());

      $scope.getMailUrl = () => $window.open(`mailto:?subject=norgeskart.no&body=${getEncodedUrl()}`, '_self');

      $scope.getTwitterUrl = () => $window.open(`http://twitter.com/share?url=${getEncodedUrl()}`, '_blank');

      $scope.getFacebookUrl = () => $window.open(`http://www.facebook.com/sharer.php?u=${getEncodedUrl()}`, '_blank');

      $scope.getIframe = () => {
        let url = `${getUrl()}&type=1`;
        if ($scope.useMarker) {
          url += `&marker_lat=${$scope.activePosition.lat}&marker_lon=${$scope.activePosition.lon}`;
        }
        $scope.iframe = `<iframe src="${url}" width="500" height="400"`;
        if ($scope.shortDescription) {
          $scope.iframe += ` title="${$scope.shortDescription}"`;
        }
        if ($scope.longDescription) {
          $scope.iframe += ` longdesc="${$scope.longDescription}"`;
        }
        $scope.iframe += '></iframe>';
        setTimeout(() => {
          $scope.$apply();
        }, 10);
      };

      $scope.getAbsoluteUrl = () => getUrl();

      $scope.copyURL = () => {
        // standard way of copying
        const textArea = document.createElement('textarea');
        textArea.setAttribute('style', 'width:1px;border:0;opacity:0;');
        document.body.appendChild(textArea);
        textArea.value = getUrl();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      };

      $scope.copyIFrame = () => {
        const textArea = document.createElement('textarea');
        textArea.setAttribute('style', 'width:1px;border:0;opacity:0;');
        document.body.appendChild(textArea);
        textArea.value = $scope.iframe;
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      };

      eventHandler.RegisterEvent(ISY.Events.EventTypes.MapMoveend, $scope.getIframe);
      $scope.iframe = '';
      $scope.getIframe();
    }
  ]);
