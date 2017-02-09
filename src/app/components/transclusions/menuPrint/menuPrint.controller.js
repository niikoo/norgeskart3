angular.module('menuPrint')
    .controller('menuPrintController', ['$scope', 'ISY.MapAPI.Map', 'ISY.EventHandler',
        function (scope, map, eventHandler) {

            var extent = {};
            scope.mapAvailable = false;
            scope.createMapButtonOn = true;

            console.log('controller initializing');

            eventHandler.RegisterEvent(ISY.Events.EventTypes.PrintBoxSelectReturnValue, _boxExtent);

            function _boxExtent(newExtent) {
                extent = newExtent;
            }

            scope.applyOrientation = function (orientation) {
                scope.orientation = orientation;
            };

            scope.applyScale = function (scale) {
                scope.scale = scale;
            };

            scope.orientation = 'landscape';

            scope.orientations = {
                'landscape': 'A4 landscape',
                'portrait': 'A4 portrait'
            };

            scope.scales = {
                '1000':'1: 1 000',
                '2500': '1: 2 500',
                '5000': '1: 5 000',
                '10000':'1: 10 000',
                '25000': '1: 25 000',
                '50000': '1: 50 000',
                '100000': '1: 100 000',
                '250000': '1: 250 000',
                '500000': '1: 500 000',
                '1000000': '1: 1 000 000'
            };

            scope.scale = '25000';

            scope.tittel = "Kart fra norgeskart.no";

            var getZoomFromScale = function (scale) {
                var i, len;
                var resolution = scale / UNITS_RATIO / POINTS_PER_INCH;
                var resolutions = map.viewResolutions;
                for (i = 0, len = resolutions.length; i < len; i++) {
                    if (resolutions[i] < resolution) {
                        break;
                    }
                }
                var zoom = Math.max(0, i - 1);
                return zoom;
            };

            var getNearestScale = function (target, scales) {
                var nearest = null;
                angular.forEach(scales, function (scale) {
                    if (nearest == null ||
                        Math.abs(scale - target) < Math.abs(nearest - target)) {
                        nearest = scale;
                    }
                });
                return nearest;
            };
        }
    ]);