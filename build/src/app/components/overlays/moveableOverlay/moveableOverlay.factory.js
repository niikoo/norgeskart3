angular.module('moveableOverlay').factory('moveableOverlayFactory', function () {
  var moveableOverlayList = [
      {
        id: 'DrawMenu',
        headingTitle: 'tegne_og_male',
        headingIcon: 'fa fa-pencil',
        show: false,
        top: 12,
        left: 19
      },
      {
        id: 'ElevationProfile',
        headingTitle: 'lag_hoydeprofil',
        headingIcon: 'fa fa-area-chart',
        show: false,
        top: 12,
        left: 19
      },
      {
        id: 'ShareMap',
        headingTitle: 'dele_kartet',
        headingIcon: 'fa fa-share-alt',
        show: false,
        top: 12,
        left: 19
      }
    ];
  return {
    setActiveOverlay: function (overlayId) {
      for (var i = 0; i < moveableOverlayList.length; i++) {
        moveableOverlayList[i].show = moveableOverlayList[i].id === overlayId;
      }
    },
    deactiveAllOverlay: function () {
      for (var i = 0; i < moveableOverlayList.length; i++) {
        moveableOverlayList[i].show = false;
      }
    },
    setPositionForActiveOverlay: function (letft, top) {
      for (var i = 0; i < moveableOverlayList.length; i++) {
        if (moveableOverlayList[i].show) {
          moveableOverlayList[i].left = letft;
          moveableOverlayList[i].top = top;
        }
      }
    },
    getActiveOverlayById: function (id) {
      for (var i = 0; i < moveableOverlayList.length; i++) {
        if (moveableOverlayList[i].id === id && moveableOverlayList[i].show) {
          return moveableOverlayList[i];
        }
      }
      return undefined;
    },
    getActiveOverlay: function () {
      for (var i = 0; i < moveableOverlayList.length; i++) {
        if (moveableOverlayList[i].show) {
          return moveableOverlayList[i];
        }
      }
      return undefined;
    },
    isOverlayVisibleById: function (id) {
      var activeOverlay = this.getActiveOverlayById(id);
      if (activeOverlay !== undefined) {
        return activeOverlay.show;
      } else {
        return false;
      }
    }
  };
});