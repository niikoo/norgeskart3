angular.module('menuPrint')
  .controller('menuPrintController', ['toolsFactory', '$scope', 'ISY.MapAPI.Map', 'ISY.EventHandler', '$http', 'mainAppService',
    (toolsFactory, scope, map, eventHandler, http, mainAppService) => {
      let extent = {};
      const cols = 1;
      const rows = 1;
      scope.mapAvailable = false;
      scope.createMapButtonOn = true;

      const boxExtent = (newExtent) => {
        extent = newExtent;
      };

      eventHandler.RegisterEvent(ISY.Events.EventTypes.PrintBoxSelectReturnValue, boxExtent);

      const activatePrintBoxSelect = () => {
        const printBoxSelectTool = toolsFactory.getToolById('PrintBoxSelect');
        printBoxSelectTool.additionalOptions.scale = scope.scale;
        printBoxSelectTool.additionalOptions.cols = cols;
        printBoxSelectTool.additionalOptions.rows = rows;
        printBoxSelectTool.additionalOptions.orientation = scope.orientation;
        printBoxSelectTool.additionalOptions.rotation = false;
        toolsFactory.activateTool(printBoxSelectTool);
      };

      scope.applyScale = (scale) => {
        scope.scale = scale;
        scope.deactivatePrintBoxSelect();
        activatePrintBoxSelect();
      };

      scope.applyOrientation = (orientation) => {
        scope.orientation = orientation;
        scope.deactivatePrintBoxSelect();
        activatePrintBoxSelect();
      };

      scope.orientation = 'landscape';

      scope.orientations = {
        landscape: 'A4 landscape',
        portrait: 'A4 portrait',
      };

      scope.scales = {
        1000: '1: 1 000',
        2500: '1: 2 500',
        5000: '1: 5 000',
        10000: '1: 10 000',
        25000: '1: 25 000',
        50000: '1: 50 000',
        100000: '1: 100 000',
        250000: '1: 250 000',
        500000: '1: 500 000',
        1000000: '1: 1 000 000',
        2500000: '1: 2 500 000',
        5000000: '1: 5 000 000',
      };

      scope.scale = '250000';

      scope.tittel = 'Kart fra norgeskart.no';

      activatePrintBoxSelect();

      const createJson = () => ({
        map: {
          bbox: extent.bbox,
          center: extent.center,
          dpi: '300',
          layers: [{
            baseURL: 'http://wms.geonorge.no/skwms1/wms.toporaster3',
            customParams: {
              TRANSPARENT: 'false',
            },
            imageFormat: 'image/jpeg',
            layers: ['toporaster'],
            opacity: 1,
            type: 'WMS',
          }],
          projection: extent.projection,
          sone: extent.sone,
          biSone: ''
        },
        paging: 12,
        layout: 'A4 landscape',
        scale: extent.scale,
        titel: scope.tittel,
        legend: scope.showLegend,
        trips: scope.showTrips,
        link: 'http://www.norgeskart.no/#9/238117/6674760'
      });

      const mapCreationFailed = () => {
        if (retryMapCreation) {
          console.log('Map creation failed. Retrying.');
          retryMapCreation = false;
          scope.orderMap();
        } else {
          console.log('Retrying map creation failed. Try again later or contact Kartverket.');
          scope.createMapButtonOn = true;
        }
      };

      const mapReadyForDownload = (response, urlPrint) => {
        scope.mapAvailable = true;
        scope.createMapButtonOn = true;
        scope.showSpinner = false;
        document.getElementById('spinner1').style.backgroundColor = 'transparent';
        document.getElementById('spinner1').style.transition = '0.8s';
        mapLink = urlPrint.replace('getprint_m.py', '') + response.data.linkPdf;
      };

      scope.downloadMap = () => {
        $window.open(mapLink, '_blank');
      };

      scope.orderMap = () => {
        scope.createMapButtonOn = false;
        scope.mapAvailable = false;
        const json = createJson();
        http.defaults.headers.post = {}; // TODO: This is a hack. CORS pre-flight should be implemented server-side
        const urlPrint = mainAppService.generatePrintUrl();
        http.post(urlPrint, json).then(
          (response) => {
            mapReadyForDownload(response, urlPrint);
          },
          (response) => {
            _mapCreationFailed(response);
          }
        );
        scope.showSpinner = true;
        document.getElementById('spinner1').style.backgroundColor = 'rgba(0,0,0,0.4)';
        document.getElementById('spinner1').style.transition = '0.8s';
      };
    },
  ]);
