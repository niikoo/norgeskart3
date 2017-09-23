angular.module('templates-app', ['components/overlays/changeBaseMapOverlay/changeBaseMapOverlay.html', 'components/overlays/mainMenuOverlay/mainMenuOverlay.html', 'components/overlays/mapOverlays/mapOverlays.html', 'components/overlays/moveableOverlay/moveableOverlay.html', 'components/overlays/searchBarOverlay/searchBarOverlay.html', 'components/transclusions/changeBaseLayerPanel/changeBaseLayerPanel.html', 'components/transclusions/mainMenuPanel/mainMenuBaseLayers/mainMenuBaseLayers.html', 'components/transclusions/mainMenuPanel/mainMenuContact/mainMenuContact.html', 'components/transclusions/mainMenuPanel/mainMenuFaq/mainMenuFaq.html', 'components/transclusions/mainMenuPanel/mainMenuGroupLayers/mainMenuGroupLayers.html', 'components/transclusions/mainMenuPanel/mainMenuPanel.html', 'components/transclusions/mainMenuPanel/mainMenuSections/mainMenuSections.html', 'components/transclusions/menuDraw/menuDraw.html', 'components/transclusions/menuElevationProfile/menuElevationProfile.html', 'components/transclusions/menuElevationProfile/menuElevationProfilePage1/menuElevationProfilePage1.html', 'components/transclusions/menuElevationProfile/menuElevationProfilePage2/menuElevationProfilePage2.html', 'components/transclusions/menuShareMap/menuShareMap.html', 'components/transclusions/searchPanel/searchKoordTransPanel/searchKoordTransPanel.html', 'components/transclusions/searchPanel/searchLagFargeleggingskartPanel/searchLagFargeleggingskartPanel.html', 'components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanel.html', 'components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanelPage1/searchLagNodplakatPanelPage1.html', 'components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanelPage2/searchLagNodplakatPanelPage2.html', 'components/transclusions/searchPanel/searchLagTurkartPanel/searchLagTurkartPanel.html', 'components/transclusions/searchPanel/searchOptionsPanel/mapGetFeatures/mapGetFeatures.html', 'components/transclusions/searchPanel/searchOptionsPanel/searchOptionsPanel.html', 'components/transclusions/searchPanel/searchPanel.html', 'components/transclusions/searchPanel/searchResultsPanel/searchResultsPanel.html', 'components/transclusions/searchPanel/searchSeEiendomPanel/searchSeEiendomPanel.html', 'components/transclusions/searchPanel/searchSeHavnivaaPanel/searchSeHavnivaaPanel.html', 'mainAppBody.html', 'shared/mapLayout/mapLayout.html', 'shared/mapOverlaysLayout/mapOverlaysLayout.html']);

angular.module("components/overlays/changeBaseMapOverlay/changeBaseMapOverlay.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/overlays/changeBaseMapOverlay/changeBaseMapOverlay.html",
    "<div change-base-layer-panel class=\"change-base-layer-overlay\"></div>\n" +
    "");
}]);

angular.module("components/overlays/mainMenuOverlay/mainMenuOverlay.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/overlays/mainMenuOverlay/mainMenuOverlay.html",
    "<div main-menu-panel></div>");
}]);

angular.module("components/overlays/mapOverlays/mapOverlays.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/overlays/mapOverlays/mapOverlays.html",
    "<div moveable-overlay class=\"moveableOverlay\" data-ng-show=\"menuShowMoveableOverlay('DrawMenu')\">\n" +
    "    <div menu-draw class=\"movemenu overlayContent\"></div>\n" +
    "</div>\n" +
    "<div moveable-overlay class=\"moveableOverlay\" data-ng-show=\"menuShowMoveableOverlay('ElevationProfile')\">\n" +
    "    <div menu-elevation-profile class=\"movemenu overlayContent\"></div>\n" +
    "</div>\n" +
    "<div moveable-overlay class=\"moveableOverlay\" data-ng-show=\"menuShowMoveableOverlay('ShareMap')\">\n" +
    "    <div menu-share-map class=\"movemenu overlayContent\"></div>\n" +
    "</div>\n" +
    "<div main-menu-overlay></div>\n" +
    "<div search-bar-overlay data-ng-show=\"showSearchOverlay()\"></div>\n" +
    "<div class=\"change-base-map-mobile\" change-base-map-overlay></div>\n" +
    "\n" +
    "");
}]);

angular.module("components/overlays/moveableOverlay/moveableOverlay.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/overlays/moveableOverlay/moveableOverlay.html",
    "<div id=\"header1\" class=\"header header-move\">\n" +
    "    <div id=\"header2\" class=\"row\">\n" +
    "        <div id=\"header3\" class=\"col-xs-7\">\n" +
    "            <span id=\"header5\" class=\"header-icon icon-important\" data-ng-class=\"headerIcon\"></span>\n" +
    "            <span class=\"text-uppercase\" id=\"header6\" translate=\"{{header}}\"></span>\n" +
    "        </div>\n" +
    "        <div id=\"header4\" class=\"col-xs-5\">\n" +
    "            <div class=\"pull-right\">\n" +
    "                <div class=\"hide-button\" data-ng-click=\"expandMenu.open = !expandMenu.open\">\n" +
    "                    <span data-ng-show=\"!expandMenu.open\" class=\"glyphicon glyphicon-menu-up\"></span>\n" +
    "                    <!--<span data-ng-show=\"!expandMenu.open\" translate=\"collapse_txt\"></span>-->\n" +
    "                    <span data-ng-show=\"expandMenu.open\" class=\"glyphicon glyphicon-menu-down\"></span>\n" +
    "                    <!--<span data-ng-show=\"expandMenu.open\" translate=\"expand_txt\"></span>-->\n" +
    "                </div>\n" +
    "                <div class=\"closebtn\" data-ng-click=\"closeOverlay()\">\n" +
    "                    <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                    <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-transclude></div>\n" +
    "");
}]);

angular.module("components/overlays/searchBarOverlay/searchBarOverlay.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/overlays/searchBarOverlay/searchBarOverlay.html",
    "<div search-panel class=\"search-bar-overlay\"></div>");
}]);

angular.module("components/transclusions/changeBaseLayerPanel/changeBaseLayerPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/changeBaseLayerPanel/changeBaseLayerPanel.html",
    "<div class=\"base-layer-panel\">\n" +
    "    <button tabindex=\"-1\" type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-repeat=\"baseLayer in allBaseLayers()\" data-ng-class=\"{activeBtn: baseLayer.isSelected}\" data-ng-click=\"toggleBaseLayer(baseLayer.id)\">\n" +
    "        <div class=\"baseMap\" data-ng-class=\"baseLayer.symbol\"></div>\n" +
    "    </button>\n" +
    "</div>");
}]);

angular.module("components/transclusions/mainMenuPanel/mainMenuBaseLayers/mainMenuBaseLayers.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/mainMenuPanel/mainMenuBaseLayers/mainMenuBaseLayers.html",
    "<div class=\"sidenav-group\">\n" +
    "    <ul>\n" +
    "        <li tabindex=\"0\" ng-keypress=\"showMainMenuSections()\" data-ng-click=\"showMainMenuSections()\">\n" +
    "            <div class=\"sidenav-header-text row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span class=\"icon-toggle-on fa fa-map\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span class=\"text-uppercase\"><span translate=\"bakgrunnskart\"></span>:</span>\n" +
    "                    <span translate=\"{{getSelectedBaseLayerName()}}\"></span>\n" +
    "                    <div class=\"backbtn\">\n" +
    "                        <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"sidenav-group\">\n" +
    "    <ul>\n" +
    "        <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-repeat=\"baseLayer in baseLayers | filter: {name: '!!' }\" ng-keypress=\"setAsBaseLayer(baseLayer)\" data-ng-click=\"setAsBaseLayer(baseLayer)\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span data-ng-class=\"getBaseLayerStyle(baseLayer)\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span translate=\"{{baseLayer.name}}\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/mainMenuPanel/mainMenuContact/mainMenuContact.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/mainMenuPanel/mainMenuContact/mainMenuContact.html",
    "<div class=\"sidenav-group\">\n" +
    "  <ul>\n" +
    "    <li tabindex=\"0\" data-ng-click=\"showMainMenuSections()\" ng-keypress=\"showMainMenuSections()\">\n" +
    "      <div class=\"sidenav-header-text row\">\n" +
    "        <div class=\"col-xs-1\">\n" +
    "          <span class=\"fa fa-comment-o\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-11\">\n" +
    "          <span class=\"text-uppercase\" translate=\"kontakt_oss\"></span>\n" +
    "          <div class=\"backbtn\">\n" +
    "            <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"sidenav-group\">\n" +
    "  <article class=\"content\">\n" +
    "    <h2><span translate=\"kontakt_oss_tittel\"></span></h2>\n" +
    "    <p><span translate=\"kontakt_oss_info\"></span></p>\n" +
    "    <p><span translate=\"telefon\"></span>: 08700 (+47 32 11 81 21 <span translate=\"fra_utlandet\"></span>)</p>\n" +
    "    <p><span translate=\"epost\"></span>: <a href=\"mailto:post@kartverket.no?subject=norgeskart.no\">post@kartverket.no</a></p>\n" +
    "  </article>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/mainMenuPanel/mainMenuFaq/mainMenuFaq.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/mainMenuPanel/mainMenuFaq/mainMenuFaq.html",
    "<div class=\"sidenav-group\">\n" +
    "  <ul>\n" +
    "    <li tabindex=\"0\" data-ng-click=\"showMainMenuSections()\" ng-keypress=\"showMainMenuSections()\">\n" +
    "      <div class=\"sidenav-header-text row\">\n" +
    "        <div class=\"col-xs-1\">\n" +
    "          <span class=\"fa fa-question\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-11\">\n" +
    "          <span class=\"text-uppercase\" translate=\"tips_og_triks\"></span>\n" +
    "          <div class=\"backbtn\">\n" +
    "            <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"sidenav-group\">\n" +
    "  <div class=\"faq-items\">\n" +
    "    <dl data-ng-class=\"faqExpand == $index ? 'expanded' : ''\" data-ng-repeat=\"faqItem in faqItems\">\n" +
    "      <dt>\n" +
    "        <a data-ng-click=\"faqToggle($event, $index)\" href=\"#\">\n" +
    "          <i class=\"pull-right fa fa-fw\" data-ng-class=\"faqExpand == $index ? 'fa-angle-up' : 'fa-angle-down'\"></i>\n" +
    "          {{faqItem.question}}\n" +
    "        </a>\n" +
    "      </dt>\n" +
    "      <dd>{{faqItem.answer}}</dd>\n" +
    "    </dl>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/mainMenuPanel/mainMenuGroupLayers/mainMenuGroupLayers.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/mainMenuPanel/mainMenuGroupLayers/mainMenuGroupLayers.html",
    "<div class=\"sidenav-group\">\n" +
    "  <ul>\n" +
    "    <li tabindex=\"0\" data-ng-click=\"removeGroups(); showMainMenuSections()\" ng-keypress=\"removeGroups(); showMainMenuSections()\">\n" +
    "      <div class=\"sidenav-header-text row\">\n" +
    "        <div class=\"col-xs-1\">\n" +
    "          <span data-ng-class=\"selectedProject.symbol\" data-ng-bind=\"selectedProject.symbol_text\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-11\">\n" +
    "          <span translate=\"{{selectedProject.title}}\"></span>\n" +
    "          <div class=\"backbtn\">\n" +
    "            <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"sidenav-group\">\n" +
    "  <ul>\n" +
    "    <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-repeat=\"group in groupLayers\" data-ng-click=\"group.isOpen = !group.isOpen;\"\n" +
    "      ng-keypress=\"group.isOpen = !group.isOpen;\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-1\">\n" +
    "          <span data-ng-class=\"getGroupStyleStatus(group)\" data-ng-click=\"toggleGroup(group); $event.stopPropagation();\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-11\">\n" +
    "          <span translate=\"{{group.name}}\"></span>\n" +
    "          <span class=\"backbtn glyphicon glyphicon-menu-down\" data-ng-show=\"!group.isOpen\"></span>\n" +
    "          <div class=\"backbtn\" data-ng-show=\"group.isOpen\">\n" +
    "            <span class=\"glyphicon glyphicon-menu-up\"></span>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <ul data-ng-show=\"group.isOpen\">\n" +
    "        <li tabindex=\"0\" data-ng-repeat=\"isyLayer in group.isyLayers\" data-ng-click=\"toggleLayer(isyLayer); $event.stopPropagation();\"\n" +
    "          ng-keypress=\"toggleLayer(isyLayer); $event.stopPropagation();\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-1\">\n" +
    "              <span data-ng-class=\"getLayerStyleStatus(isyLayer)\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-9\">\n" +
    "              <span translate=\"{{isyLayer.name}}\"></span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "<div class=\"sidenav-group\">\n" +
    "  <ul>\n" +
    "    <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-click=\"legend.open = !legend.open\" ng-keypress=\"legend.open = !legend.open\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-xs-11\">\n" +
    "          <span translate=\"legend_txt\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-1\">\n" +
    "          <span data-ng-show=\"legend.open\" class=\"backbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "          <span data-ng-show=\"!legend.open\" class=\"backbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div class=\"legend-panel\" data-ng-show=\"legend.open\">\n" +
    "    <ul class=\"group-layer-fix\">\n" +
    "      <li data-ng-repeat=\"group in groupLayers | filter:groupFilter\">\n" +
    "        <div class=\"row\" data-ng-show=\"checkMatrikkel(group)\">\n" +
    "          <div class=\"legend1\"></div>\n" +
    "          <div class=\"legend2\"></div>\n" +
    "        </div>\n" +
    "        <ul>\n" +
    "          <li data-ng-repeat=\"isyLayer in group.isyLayers | filter:legendFilter\">\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-xs-9\">\n" +
    "                <span translate=\"{{isyLayer.name}}\"></span>\n" +
    "              </div>\n" +
    "              <div class=\"col-xs-10\">\n" +
    "                <img class=\"legend\" data-ng-src=\"{{GetLegendGraphicUrl(isyLayer)}}\">\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/mainMenuPanel/mainMenuPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/mainMenuPanel/mainMenuPanel.html",
    "<div id=\"mySidenav\" class=\"sidenav\">\n" +
    "    <div id=\"sideMenuPosition\" class=\"side-menu-position\">\n" +
    "        <div class=\"norgeskart-logo\">\n" +
    "            <button class=\"close\" data-ng-click=\"closeNav(); removeInfomarkers(); addResultsToMap(); showMainMenuSections()\" type=\"button\">\n" +
    "                <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "            </button>\n" +
    "            <h1>\n" +
    "                <a data-ng-click=\"resetApplication($event)\" href=\".\">\n" +
    "                    <img alt=\"\" class=\"norgeskart-logo-image\" src=\"assets/img/Ikon_Kart_Norge_org36.png\">\n" +
    "                    Norgeskart\n" +
    "                </a>\n" +
    "            </h1>\n" +
    "        </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "        <div ng-switch=\"mainMenuPanelLayout\">\n" +
    "            <div ng-switch-when=\"mainMenuSections\" main-menu-sections></div>\n" +
    "            <div ng-switch-when=\"mainMenuBaseLayers\" main-menu-base-layers></div>\n" +
    "            <div ng-switch-when=\"mainMenuGroupLayers\" main-menu-group-layers></div>\n" +
    "            <div ng-switch-when=\"mainMenuFaq\" main-menu-faq></div>\n" +
    "            <div ng-switch-when=\"mainMenuContact\" main-menu-contact></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("components/transclusions/mainMenuPanel/mainMenuSections/mainMenuSections.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/mainMenuPanel/mainMenuSections/mainMenuSections.html",
    "<div class=\"sidenav-group\">\n" +
    "    <ul>\n" +
    "        <li tabindex=\"0\" ng-keypress=\"showMainMenuBaseLayers()\" data-ng-click=\"showMainMenuBaseLayers()\">\n" +
    "            <div class=\"sidenav-header-text row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span class=\"icon-toggle-on fa fa-map\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span class=\"text-uppercase\"><span translate=\"bakgrunnskart\"></span>:</span>\n" +
    "                    <span translate=\"{{getSelectedBaseLayerName()}}\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"sidenav-group\">\n" +
    "    <div class=\"margin-header-text\">\n" +
    "        <div class=\"sidenav-header-text pointer-cursor row\" data-ng-click=\"themaMenu.open = !themaMenu.open\">\n" +
    "            <div class=\"col-xs-1\">\n" +
    "                <span class=\"icon-important fa fa-map\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-11\">\n" +
    "                <span class=\"text-uppercase\" translate=\"temakart\"></span>\n" +
    "                <span data-ng-show=\"!themaMenu.open\" class=\"upbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "                <span data-ng-show=\"themaMenu.open\" class=\"upbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul data-ng-show=\"!themaMenu.open\">\n" +
    "        <li tabindex=\"0\" data-ng-repeat=\"project in projects\" data-ng-class=\"{activeMenu: project.isSelected}\" data-ng-click=\"activateProject(project)\" ng-keypress=\"activateProject(project)\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span data-ng-class=\"project.symbol\" data-ng-bind=\"project.symbol_text\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span translate=\"{{project.title}}\"></span>\n" +
    "                    <div class=\"pull-right\">\n" +
    "                    <!--<span class=\"circle\" data-ng-show=\"project.isSelected\" data-ng-bind=\"getVisibleSubLayersCount()\"></span>-->\n" +
    "                    <span class=\"badge\" data-ng-show=\"project.isSelected\" data-ng-bind=\"visibleLayersCount\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                        </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"sidenav-group\">\n" +
    "    <div class=\"margin-header-text\">\n" +
    "        <div class=\"sidenav-header-text pointer-cursor row\" data-ng-click=\"sectionMenu.open = !sectionMenu.open\">\n" +
    "            <div class=\"col-xs-10\">\n" +
    "                <span class=\"text-uppercase\" translate=\"hva_vil_du_gjore\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-2\">\n" +
    "                <span data-ng-show=\"!sectionMenu.open\" class=\"upbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "                <span data-ng-show=\"sectionMenu.open\" class=\"upbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <ul data-ng-show=\"!sectionMenu.open\">\n" +
    "        <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-click=\"showMoveableDrawMenu();closeNav();initDrawFeatureTool()\" ng-keypress=\"showMoveableDrawMenu();closeNav();initDrawFeatureTool()\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span class=\"icon-important fa fa-pencil\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span class=\"text-uppercase\" translate=\"tegne_og_male\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-click=\"showMoveableShareMapMenu(); closeNav()\" ng-keypress=\"showMoveableShareMapMenu(); closeNav()\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span class=\"icon-important fa fa-share-alt\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span class=\"text-uppercase\" translate=\"dele_kartet\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-click=\"printMap()\" ng-keypress=\"printMap()\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span class=\"icon-important fa fa-print\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span class=\"text-uppercase\" translate=\"skriv_ut\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "        <li tabindex=\"0\" class=\"sidenav-sections\" data-ng-click=\"showMoveableElevationProfileMenu();closeNav()\" ng-keypress=\"showMoveableElevationProfileMenu();closeNav()\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-1\">\n" +
    "                    <span class=\"icon-important fa fa-area-chart\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-11\">\n" +
    "                    <span class=\"text-uppercase\" translate=\"lag_hoydeprofil\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"sidenav-group\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <ul>\n" +
    "                <li tabindex=\"0\" data-ng-click=\"showMainMenuFaq()\" ng-keypress=\"showMainMenuFaq()\">\n" +
    "                    <span translate=\"tips_og_triks\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </li>\n" +
    "                <li tabindex=\"0\" data-ng-click=\"showMainMenuContact()\" ng-keypress=\"showMainMenuContact()\">\n" +
    "                    <span translate=\"kontakt_oss\"></span>\n" +
    "                    <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"sidenav-group\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"tab-group\">\n" +
    "                <span class=\"tab-group-item\" data-ng-class=\"{active: language.active}\" data-ng-click=\"changeLanguage(language.id)\" data-ng-repeat=\"language in languages\" ng-keypress=\"changeLanguage(language.id)\">\n" +
    "                    {{language.title}}\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/transclusions/menuDraw/menuDraw.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/menuDraw/menuDraw.html",
    "<div class=\"panel-body\">\n" +
    "    <!-- Nav tabs -->\n" +
    "    <ul class=\"nav nav-tabs\" data-ng-class=\"{navTabsTransparent: expandMenu.open}\" role=\"tablist\" id=\"myTabs\">\n" +
    "        <li data-ng-click=\"switchType('Point')\" role=\"presentation\" class=\"active\"><a href data-target=\"#point\" aria-controls=\"point\" role=\"tab\" data-toggle=\"tab\" translate=\"point_txt\"></a></li>\n" +
    "        <li data-ng-click=\"switchType('LineString')\" role=\"presentation\"><a href data-target=\"#line\" aria-controls=\"line\" role=\"tab\" data-toggle=\"tab\" translate=\"line_txt\"></a></li>\n" +
    "        <li data-ng-click=\"switchType('Polygon')\" role=\"presentation\"><a href data-target=\"#polygon\" aria-controls=\"polygon\" role=\"tab\" data-toggle=\"tab\" translate=\"polygon_txt\"></a></li>\n" +
    "        <li data-ng-click=\"switchType('Text')\" role=\"presentation\"><a href data-target=\"#text\" aria-controls=\"text\" role=\"tab\" data-toggle=\"tab\" translate=\"text_txt\"></a></li>\n" +
    "    </ul>\n" +
    "    <!-- Tab panes -->\n" +
    "    <div data-ng-show=\"!expandMenu.open\" class=\"tab-content search-content\">\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"point\">\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6 col-xs-6\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"pointType_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-same-size navigation-button\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: pointSymbol==='Circle'}\" data-ng-click=\"switchSymbol('Circle')\">●</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: pointSymbol==='Triangle'}\" data-ng-click=\"switchSymbol('Triangle')\">▲</button>\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: pointSymbol==='Diamond'}\" data-ng-click=\"switchSymbol('Diamond')\">♦</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6 col-xs-6 draw-content\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"size_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"navigation-button btn-same-size\">\n" +
    "                            <button type=\"button\" data-ng-repeat=\"pointRadiusSize in pointRadiusSizes\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: activePointType === pointRadiusSize.sizeType}\" data-ng-click=\"setPointRadiusSize(pointRadiusSize); activateDrawFeatureTool()\">\n" +
    "                                <span translate=\"{{pointRadiusSize.sizeType}}\"></span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"color_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-same-size navigation-button\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" ng-model=\"color\" data-ng-class=\"{activeBtn: color === val}\" data-ng-click=\"setColor(val)\" data-ng-repeat=\"(key, val) in colors\" >\n" +
    "                                <div class=\"color-picker\" data-ng-style=\"{'background-color':key, 'border': 'none'}\">\n" +
    "                                    <span></span>\n" +
    "                                </div>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"snap\" ng-change=\"activateDrawFeatureTool()\">\n" +
    "                        <span translate=\"snap_txt\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"new-section navigation-button\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\" translate=\"remove_txt\" data-ng-disabled=\"!selectionActive\" data-ng-click=\"deleteButtonClick()\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode === 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('draw')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode !== 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('modify')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"line\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"showMeasurements\" data-ng-change=\"activateDrawFeatureTool()\"/>\n" +
    "                    <span translate=\"showMeasurements_txt\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-sm-6 col-xs-6\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"lineType_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"navigation-button\">\n" +
    "                            <button data-ng-repeat=\"lineType in lineTypes\" type=\"button\" class=\"btn btn-default btn-toggle btn-rectangle-same-size\" data-ng-class=\"{activeBtn: lineType.lineTypeId === activeLineType}\" data-ng-click=\"switchLineType(lineType)\" data-ng-bind=\"lineType.lineType\"></button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-sm-6 col-xs-6 draw-content\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"width_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"navigation-button btn-same-size\">\n" +
    "                            <button type=\"button\" data-ng-repeat=\"lineWidthSize in lineWidthSizes\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: activeLineWidthSize === lineWidthSize.lineTypeId}\" data-ng-click=\"setLineWidthSize(lineWidthSize);\">\n" +
    "                                <span translate=\"{{lineWidthSize.sizeType}}\"></span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"color_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-same-size navigation-button\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" ng-model=\"color\" data-ng-class=\"{activeBtn: color === val}\" data-ng-click=\"setColor(val)\" data-ng-repeat=\"(key, val) in colors\" >\n" +
    "                                <div class=\"color-picker\" data-ng-style=\"{'background-color':key, 'border': 'none'}\">\n" +
    "                                    <span></span>\n" +
    "                                </div>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"snap\" ng-change=\"activateDrawFeatureTool()\">\n" +
    "                        <span translate=\"snap_txt\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"new-section navigation-button\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\" translate=\"remove_txt\" data-ng-disabled=\"!selectionActive\" data-ng-click=\"deleteButtonClick()\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode === 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('draw')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode !== 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('modify')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"polygon\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"showMeasurements\" data-ng-change=\"activateDrawFeatureTool()\"/>\n" +
    "                    <span translate=\"showMeasurements_txt\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"opacity_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"navigation-button\">\n" +
    "                            <button type=\"button\" data-ng-repeat=\"polygonOpacity in polygonOpacities\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: activeOpacityType === polygonOpacity.opacityType}\" data-ng-click=\"setPolygonOpacity(polygonOpacity);\">\n" +
    "                                <span translate=\"{{polygonOpacity.opacityType}}\"></span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"color_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-same-size navigation-button\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" ng-model=\"color\" data-ng-class=\"{activeBtn: color === val}\" data-ng-click=\"setColor(val)\" data-ng-repeat=\"(key, val) in colors\" >\n" +
    "                                <div class=\"color-picker\" data-ng-style=\"{'background-color':key, 'border': 'none'}\">\n" +
    "                                    <span></span>\n" +
    "                                </div>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"snap\" ng-change=\"activateDrawFeatureTool()\">\n" +
    "                        <span translate=\"snap_txt\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"new-section navigation-button\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\" translate=\"remove_txt\" data-ng-disabled=\"!selectionActive\" data-ng-click=\"deleteButtonClick()\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode === 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('draw')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode !== 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('modify')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"text\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"title-text\">\n" +
    "                        <span translate=\"text_txt_label\"></span>\n" +
    "                    </div>\n" +
    "                    <input type=\"text\" ng-model=\"text\" placeholder=\"Skriv inn tekst her\" ng-change=\"activateDrawFeatureTool()\"\n" +
    "                           class=\"full-width\"\n" +
    "                    />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"size_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"navigation-button btn-same-size\">\n" +
    "                            <button type=\"button\" data-ng-repeat=\"textHightSize in textHightSizes\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: activeTextHight === textHightSize.textType}\" data-ng-click=\"setTextHight(textHightSize);\">\n" +
    "                                <span translate=\"{{textHightSize.textType}}\"></span>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12\">\n" +
    "                        <div class=\"title-text\">\n" +
    "                            <span translate=\"color_txt\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"btn-same-size navigation-button\">\n" +
    "                            <button type=\"button\" class=\"btn btn-default btn-toggle\" ng-model=\"color\" data-ng-class=\"{activeBtn: color === val}\" data-ng-click=\"setColor(val)\" data-ng-repeat=\"(key, val) in colors\" >\n" +
    "                                <div class=\"color-picker\" data-ng-style=\"{'background-color':key, 'border': 'none'}\">\n" +
    "                                    <span></span>\n" +
    "                                </div>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"new-section navigation-button\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\" translate=\"remove_txt\" data-ng-disabled=\"!selectionActive\" data-ng-click=\"deleteButtonClick()\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode === 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('draw')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "                <button data-ng-show=\"mode !== 'modify'\" class=\"btn btn-default btn-toggle\" data-ng-click=\"switchMode('modify')\" data-ng-class=\"{activeBtn: mode === 'modify'}\" translate=\"change_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div data-ng-show=\"!expandMenu.open\" class=\"row\">\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"navigation-button\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\"\n" +
    "                        data-ng-click=\"newButtonClick()\" translate=\"empty_txt\">\n" +
    "                </button>\n" +
    "                <button class=\"btn btn-default btn-ordinary\" ng-hide=\"drawingHash == ''\"\n" +
    "                        data-ng-click=\"downloadButtonClick()\" translate=\"download_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-6\">\n" +
    "            <div class=\"navigation-button pull-right\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\"\n" +
    "                        data-ng-click=\"closeOverlay()\" translate=\"Cancel_txt\">\n" +
    "                </button>\n" +
    "                <button class=\"btn btn-default btn-important\" data-ng-click=\"saveButtonClick()\" translate=\"save_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);

angular.module("components/transclusions/menuElevationProfile/menuElevationProfile.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/menuElevationProfile/menuElevationProfile.html",
    "<div ng-switch=\"menuElevationProfileLayout\" data-ng-show=\"!expandMenu.open\">\n" +
    "    <div ng-switch-when=\"page1\" menu-elevation-profile-page1 ng-init=\"drawLineElevation()\"></div>\n" +
    "    <div ng-switch-when=\"page2\" menu-elevation-profile-page2 ng-init=\"viewElevationProfile()\"></div>\n" +
    "</div>");
}]);

angular.module("components/transclusions/menuElevationProfile/menuElevationProfilePage1/menuElevationProfilePage1.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/menuElevationProfile/menuElevationProfilePage1/menuElevationProfilePage1.html",
    "<div id=\"spinner2\" class=\"search-loading-overlay\" data-ng-show=\"showSpinner\">\n" +
    "    <div class=\"spinner-loader\"><i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i></div>\n" +
    "</div>\n" +
    "<div class=\"panel-body\">\n" +
    "    <!-- Nav tabs -->\n" +
    "    <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myElevationTabs\">\n" +
    "        <li role=\"presentation\" class=\"active\"><a href data-target=\"#drawProfile\" aria-controls=\"drawProfile\" role=\"tab\" data-toggle=\"tab\" translate=\"drawInMap_txt\"></a></li>\n" +
    "        <li role=\"presentation\"><a href data-target=\"#uploadFile\" aria-controls=\"uploadFile\" role=\"tab\" data-toggle=\"tab\" translate=\"uploadFile_txt\"></a></li>\n" +
    "    </ul>\n" +
    "    <!-- Tab panes -->\n" +
    "    <div class=\"tab-content search-content\">\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"drawProfile\">\n" +
    "            <span translate=\"profileInfo_txt\"></span>\n" +
    "            <div class=\"new-section navigation-button\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\" data-ng-click=\"removeGeometry()\" translate=\"remove_txt\" data-ng-disabled=\"!elevationProfileActive\"></button>\n" +
    "                <button type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-class=\"{activeBtn: isDrawActive()}\" data-ng-click=\"drawLineElevation()\" translate=\"drawProfile_txt\"></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"uploadFile\">\n" +
    "            <div class=\"new-section\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" class=\"form-control btn-group\" aria-label=\"...\" data-ng-disabled=\"true\" ng-model=\"filePath\">\n" +
    "                    <div class=\"input-group-btn\">\n" +
    "                        <input class=\"no-display btn-group\" type=\"file\" id=\"files\" fileread=\"uploadGpx\">\n" +
    "                        <button type=\"button\" id=\"clickInput\" class=\"btn btn-default btn-important\" translate=\"chooseFile_txt\"></button>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"navigation-button pull-right\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\"\n" +
    "                        data-ng-click=\"closeOverlay()\" translate=\"Cancel_txt\">\n" +
    "                </button>\n" +
    "                <button data-ng-disabled=\"!isElevationProfileActive()\" class=\"btn btn-default btn-important\" data-ng-click=\"calculateElevationProfile()\" translate=\"showElevationProfile_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/menuElevationProfile/menuElevationProfilePage2/menuElevationProfilePage2.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/menuElevationProfile/menuElevationProfilePage2/menuElevationProfilePage2.html",
    "<div class=\"panel-body\">\n" +
    "    <div class=\"search-content\">\n" +
    "        <img class=\"scale-image pointer-cursor\" ng-src=\"{{getElevationImage()}}\" data-ng-click=\"showImage()\">\n" +
    "    </div>\n" +
    "    <div class=\"navigation-button pull-right\">\n" +
    "        <button class=\"btn btn-default btn-ordinary\"\n" +
    "                data-ng-click=\"closeOverlay()\" translate=\"Cancel_txt\">\n" +
    "        </button>\n" +
    "        <button class=\"btn btn-default btn-important\" data-ng-click=\"downloadImage()\" translate=\"download_txt\">\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("components/transclusions/menuShareMap/menuShareMap.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/menuShareMap/menuShareMap.html",
    "<div class=\"panel-body\" data-ng-show=\"!expandMenu.open\">\n" +
    "    <!-- Nav tabs -->\n" +
    "    <ul class=\"nav nav-tabs\" role=\"tablist\" id=\"myElevationTabs\">\n" +
    "        <li role=\"presentation\" class=\"active\"><a href data-target=\"#shareOnline\" aria-controls=\"shareOnline\" role=\"tab\" data-toggle=\"tab\" translate=\"shareOnline_txt\"></a></li>\n" +
    "        <li role=\"presentation\"><a href data-target=\"#embedMap\" aria-controls=\"embedMap\" role=\"tab\" data-toggle=\"tab\" translate=\"embedMap_txt\"></a></li>\n" +
    "    </ul>\n" +
    "    <!-- Tab panes -->\n" +
    "    <div class=\"tab-content search-content\">\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"shareOnline\">\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <div data-ng-click=\"getFacebookUrl()\" class=\"pointer-cursor\">\n" +
    "                        <span class=\"fa fa-facebook-official\"></span>\n" +
    "                        <span translate=\"facebook_txt\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-6\">\n" +
    "                    <div data-ng-click=\"getTwitterUrl()\" class=\"pointer-cursor\">\n" +
    "                        <span class=\"fa fa-twitter\"></span>\n" +
    "                        <span translate=\"twitter_txt\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div data-ng-click=\"getMailUrl()\" class=\"pointer-cursor\">\n" +
    "                        <span class=\"fa fa-envelope\"></span>\n" +
    "                        <span translate=\"email_txt\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"title-text\">\n" +
    "                        <span translate=\"copyLink_txt\"></span>\n" +
    "                    </div>\n" +
    "                    <input type=\"text\" class=\"full-width\" data-ng-disabled=\"true\" placeholder=\"{{getAbsoluteUrl()}}\"/>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section pull-right\">\n" +
    "                <button class=\"btn btn-default btn-important\" data-ng-click=\"copyURL()\" translate=\"copy_txt\"></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div role=\"tabpanel\" class=\"tab-pane\" id=\"embedMap\">\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"title-text\">\n" +
    "                        <span translate=\"heading_txt\"></span>\n" +
    "                    </div>\n" +
    "                    <input class=\"row-input\" ng-change=\"getIframe()\" ng-model=\"shortDescription\" type=\"text\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"title-text\">\n" +
    "                        <span translate=\"description_txt\"></span>\n" +
    "                    </div>\n" +
    "                    <input class=\"row-input\" ng-change=\"getIframe()\" ng-model=\"longDescription\" type=\"text\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input ng-change=\"getIframe()\" type=\"checkbox\" ng-model=\"useMarker\" data-ng-disabled=\"!activePosition\">\n" +
    "                    <span translate=\"iframe_useMarker\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <textarea data-ng-disabled=\"true\" readonly ng-model=\"iframe\" rows=\"10\"></textarea>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"new-section pull-right\">\n" +
    "                <button class=\"btn btn-default btn-important\" data-ng-click=\"copyIFrame()\" translate=\"copy_txt\"></button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"navigation-button pull-right\">\n" +
    "                <button class=\"btn btn-default btn-ordinary\"\n" +
    "                        data-ng-click=\"closeOverlay()\" translate=\"Cancel_txt\">\n" +
    "                </button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchKoordTransPanel/searchKoordTransPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchKoordTransPanel/searchKoordTransPanel.html",
    "<div class=\"search-panel\" data-ng-controller=\"searchKoordTransPanelController\">\n" +
    "  <div class=\"header\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-xs-12\">\n" +
    "        <span class=\"header-icon icon-important\" data-ng-class=\"searchOptionsDict['koordTrans'].icon.value\"></span>\n" +
    "        <span class=\"text-uppercase\" translate=\"koord_tittel\"></span>\n" +
    "        <div class=\"closebtn\" data-ng-click=\"showSearchOptionsPanel()\">\n" +
    "          <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "          <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"search-content\">\n" +
    "    <div>\n" +
    "      <span translate=\"koord_info\"></span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"new-section\">\n" +
    "      <div class=\"dropdown\">\n" +
    "        <button class=\"btn btn-default btn-searchPanel dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n" +
    "          aria-expanded=\"true\">\n" +
    "                <span translate=\"{{getActiveCoorSystem()}}\"></span>\n" +
    "                <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "        <ul class=\"dropdown-menu dropdown-menu-relative\" aria-labelledby=\"dropdownMenu2\">\n" +
    "          <li data-ng-repeat=\"(key, value) in coordinateSystems\" data-ng-click=\"_fetchKoordTrans(key)\" class=\"pointer-cursor\">\n" +
    "            <span translate=\"{{coordinateSystems[key]}}\"></span>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "      <div class=\"checkbox checkbox-below\">\n" +
    "        <label>\n" +
    "          <input type=\"checkbox\" data-ng-click=\"generateCoordinateSystems()\" ng-model=\"showAdvancedCoordinateSystems\" /> <span translate=\"koord_vis_flere\"></span>\n" +
    "        </label>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"new-section\">\n" +
    "      <table class=\"table table-condensed table-borderless mb-0\">\n" +
    "        <colgroup>\n" +
    "          <col width=\"25%\">\n" +
    "          <col width=\"75%\">\n" +
    "        </colgroup>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <th>\n" +
    "              <span class=\"text-uppercase\" translate=\"koord_nord\"></span>\n" +
    "            </th>\n" +
    "            <td>\n" +
    "              <div><span data-ng-bind=\"activePosition.transLat\"></span></div>\n" +
    "              <div><span data-ng-bind=\"activePosition.transLat2\"></span></div>\n" +
    "              <div><span data-ng-bind=\"activePosition.transLat3\"></span></div>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "          <tr>\n" +
    "            <th>\n" +
    "              <span class=\"text-uppercase\" translate=\"koord_ost\"></span>\n" +
    "            </th>\n" +
    "            <td>\n" +
    "              <div><span data-ng-bind=\"activePosition.transLon\"></span></div>\n" +
    "              <div><span data-ng-bind=\"activePosition.transLon2\"></span></div>\n" +
    "              <div><span data-ng-bind=\"activePosition.transLon3\"></span></div>\n" +
    "            </td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"new-section navigation-button pull-right\">\n" +
    "      <button class=\"btn btn-default btn-ordinary\" data-ng-click=\"showSearchOptionsPanel()\" translate=\"Cancel_txt\">\n" +
    "            </button>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchLagFargeleggingskartPanel/searchLagFargeleggingskartPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchLagFargeleggingskartPanel/searchLagFargeleggingskartPanel.html",
    "<div class=\"search-panel\" ng-show=\"searchResults != undefined\">\n" +
    "    <div id=\"spinner1\" class=\"search-loading-overlay\" data-ng-show=\"showSpinner\">\n" +
    "        <div class=\"spinner-loader\"><i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i></div>\n" +
    "    </div>\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <span class=\"header-icon icon-important\" data-ng-class=\"searchOptionsDict['lagFargeleggingskart'].icon.value\"></span>\n" +
    "                <span translate=\"Fargeleggingskart_title\"></span>\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <div class=\"hide-button\" data-ng-click=\"fargeleggingsMap.open = !fargeleggingsMap.open\">\n" +
    "                        <span data-ng-show=\"!fargeleggingsMap.open\" class=\"glyphicon glyphicon-menu-up\"></span>\n" +
    "                        <span data-ng-show=\"fargeleggingsMap.open\" class=\"glyphicon glyphicon-menu-down\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"closebtn\" data-ng-click=\"deactivatePrintBoxSelect(); showSearchOptionsPanel()\">\n" +
    "                        <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                        <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"search-content\" data-ng-show=\"!fargeleggingsMap.open\">\n" +
    "        <div class=\"info-text\">\n" +
    "            <span translate=\"Fargeleggingskart_info\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"info-text\">\n" +
    "            <span translate=\"Scale\"></span>: <b>1: 5 000</b>.\n" +
    "        </div>\n" +
    "        <div class=\"new-section\">\n" +
    "            <div class=\"title-text\">\n" +
    "                <span translate=\"Fargeleggingskart_navn\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"text\"\n" +
    "                           placeholder=\"{{'Fargeleggingskart_navn_eks' | translate}}\"\n" +
    "                           ng-model=\"tittel\"\n" +
    "                           ng-disabled=\"!createMapButtonOn\"\n" +
    "                           class=\"full-width\"\n" +
    "                    />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"new-section navigation-button pull-right\">\n" +
    "            <button class=\"btn btn-default btn-ordinary\"\n" +
    "                    data-ng-click=\"deactivatePrintBoxSelect(); showSearchOptionsPanel()\" translate=\"Cancel_txt\">\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"btn btn-default btn-important\" data-ng-click=\"orderMap()\"\n" +
    "                    ng-disabled=\"!createMapButtonOn\" translate=\"lagFargeleggingskart\">\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"btn btn-default btn-important\" data-ng-click=\"downloadMap()\"\n" +
    "                    ng-disabled=\"!mapAvailable\" translate=\"DownloadMap\">\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanel.html",
    "<div ng-switch=\"searchLagNodplakatPanelLayout\">\n" +
    "    <div ng-switch-when=\"page1\" search-lag-nodplakat-panel-page1></div>\n" +
    "    <div ng-switch-when=\"page2\" search-lag-nodplakat-panel-page2></div>\n" +
    "</div>");
}]);

angular.module("components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanelPage1/searchLagNodplakatPanelPage1.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanelPage1/searchLagNodplakatPanelPage1.html",
    "<div class=\"search-panel\" ng-show=\"searchResults != undefined\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <span class=\"header-icon icon-important\" data-ng-class=\"searchOptionsDict['lagNodplakat'].icon.value\"></span>\n" +
    "                <span translate=\"lagNodplakat\"></span>\n" +
    "                <div class=\"closebtn\" data-ng-click=\"showSearchOptionsPanel()\">\n" +
    "                    <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                    <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"search-content\">\n" +
    "\n" +
    "        <h4 class=\"no-top\" translate=\"Ansvar\"></h4>\n" +
    "        <div class=\"info-text\">\n" +
    "            <span translate=\"NodplakatText1\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"info-text\">\n" +
    "            <span translate=\"NodplakatText2\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"info-text\">\n" +
    "            <span translate=\"NodplakatText3\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"new-section navigation-button pull-right\">\n" +
    "            <button type=\"button\" class=\"btn btn-default btn-important\" data-ng-click=\"showLagNodplakatPage2()\">\n" +
    "                <span translate=\"AcceptAndContinue\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanelPage2/searchLagNodplakatPanelPage2.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchLagNodplakatPanel/searchLagNodplakatPanelPage2/searchLagNodplakatPanelPage2.html",
    "<div class=\"search-panel\" ng-show=\"searchResults != undefined\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <span class=\"header-icon icon-important\" data-ng-class=\"searchOptionsDict['lagNodplakat'].icon.value\"></span>\n" +
    "                <span translate=\"lagNodplakat\"></span>\n" +
    "                <div class=\"closebtn\" data-ng-click=\"showSearchOptionsPanel()\">\n" +
    "                    <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                    <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"search-content\">\n" +
    "        <div ng-show=\"lagNodplakatDict['placenamesByBbox']\">\n" +
    "            <div class=\"title-text\">\n" +
    "                <span translate=\"GiPunktetNavn\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"text\"\n" +
    "                           placeholder=\"(F.eks. navn på hytta)\"\n" +
    "                           ng-model=\"lagNodplakatName\"\n" +
    "                           class=\"full-width\"\n" +
    "                           />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"new-section\" ng-show=\"lagNodplakatDict['placenamesByBbox']\">\n" +
    "            <div class=\"title-text\">\n" +
    "                <span translate=\"PlaceIs\"></span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"dropdown\">\n" +
    "                        <button class=\"btn btn-default btn-searchPanel dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "                            <span data-ng-bind=\"activePlaceName\"></span>\n" +
    "                            <span class=\"caret\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu dropdown-menu-relative\" aria-labelledby=\"dropdownMenu2\">\n" +
    "                            <li data-ng-repeat=\"(key, value) in lagNodplakatDict['placenamesByBbox']\" data-ng-click=\"setNodePlagatName(value.stedsnavn)\" class=\"pointer-cursor\">\n" +
    "                                <span data-ng-bind=\"value.stedsnavn\"></span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"new-section\" ng-show=\"lagNodplakatDict['emergencyPosterPoint'].veg\">\n" +
    "            <span>\n" +
    "                <span translate=\"FoundRoadIs\"></span>\n" +
    "                <span> {{lagNodplakatDict['emergencyPosterPoint'].veg}} </span>\n" +
    "                <span translate=\"In\"></span>\n" +
    "                <span> {{lagNodplakatDict['emergencyPosterPoint'].kommune}}</span>\n" +
    "                <span translate=\"Municipality\"></span>\n" +
    "            </span>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"dropdown\">\n" +
    "                        <button class=\"btn btn-default btn-searchPanel dropdown-toggle\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "                            <span>{{ valgtTekst | translate }}</span>\n" +
    "                            <span class=\"caret\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu dropdown-menu-relative\" aria-labelledby=\"dropdownMenu3\">\n" +
    "                            <li data-ng-click=\"setlagNodplakatConfirmRoad(true)\" class=\"pointer-cursor\">\n" +
    "                                <span translate=\"ja\"></span>\n" +
    "                            </li>\n" +
    "                            <li data-ng-click=\"setlagNodplakatConfirmRoad(false)\" class=\"pointer-cursor\">\n" +
    "                                <span translate=\"nei\"></span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"new-section navigation-button pull-right\">\n" +
    "            <button class=\"btn btn-default btn-ordinary\"\n" +
    "                    data-ng-click=\"showSearchOptionsPanel()\" translate=\"Cancel_txt\">\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"btn btn-default btn-important\" data-ng-disabled=\"!nodplakatConfirmRoad\"\n" +
    "                    data-ng-click=\"downloadEmergencyPoster()\" translate=\"downloadEmergencyPoster\">\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchLagTurkartPanel/searchLagTurkartPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchLagTurkartPanel/searchLagTurkartPanel.html",
    "<div class=\"search-panel\" ng-show=\"searchResults != undefined\">\n" +
    "    <div id=\"spinner1\" class=\"search-loading-overlay\" data-ng-show=\"showSpinner\">\n" +
    "        <div class=\"spinner-loader\"><i class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i></div>\n" +
    "    </div>\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <span class=\"header-icon icon-important\" data-ng-class=\"searchOptionsDict['lagTurkart'].icon.value\"></span>\n" +
    "                <span translate=\"Turkart_title\"></span>\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <div class=\"hide-button\" data-ng-click=\"turMap.open = !turMap.open\">\n" +
    "                        <span data-ng-show=\"!turMap.open\" class=\"glyphicon glyphicon-menu-up\"></span>\n" +
    "                        <span data-ng-show=\"turMap.open\" class=\"glyphicon glyphicon-menu-down\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"closebtn\" data-ng-click=\"deactivatePrintBoxSelect(); showSearchOptionsPanel()\">\n" +
    "                        <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                        <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"search-content\" data-ng-show=\"!turMap.open\">\n" +
    "        <div class=\"info-text\">\n" +
    "            <span translate=\"Turkart_info\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"new-section\">\n" +
    "            <div class=\"title-text\">\n" +
    "                <span translate=\"Scale\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <div class=\"dropdown\">\n" +
    "                        <button class=\"btn btn-default btn-searchPanel dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "                            <span data-ng-bind=\"scales[scale]\"></span>\n" +
    "                            <span class=\"caret\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu dropdown-menu-relative\" aria-labelledby=\"dropdownMenu2\">\n" +
    "                            <li data-ng-repeat=\"(key, value) in scales\" data-ng-click=\"applyScale(key)\" class=\"pointer-cursor\">\n" +
    "                                <span data-ng-bind=\"scales[key]\"></span>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"new-section\">\n" +
    "            <div class=\"title-text\">\n" +
    "                <span translate=\"Turkart_navn\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"text\"\n" +
    "                           placeholder=\"{{'Turkart_navn_eks' | translate}}\"\n" +
    "                           ng-model=\"tittel\"\n" +
    "                           ng-disabled=\"!createMapButtonOn\"\n" +
    "                           class=\"full-width\"\n" +
    "                    />\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"new-section\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"showTrips\" ng-disabled=\"!createMapButtonOn\"/>\n" +
    "                    <span translate=\"FremhevMerkedeStier\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"showLegend\" ng-disabled=\"!createMapButtonOn\"/>\n" +
    "                    <span translate=\"AddLegend\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "              <div class=\"col-xs-12\">\n" +
    "                <input type=\"checkbox\" ng-model=\"showSweden\" ng-disabled=\"!createMapButtonOn\" />\n" +
    "                <span translate=\"AddSweden\"></span>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"new-section navigation-button pull-right\">\n" +
    "            <button class=\"btn btn-default btn-ordinary\"\n" +
    "                    data-ng-click=\"deactivatePrintBoxSelect(); showSearchOptionsPanel()\" translate=\"Cancel_txt\">\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"btn btn-default btn-important\" data-ng-click=\"orderMap()\"\n" +
    "                    ng-disabled=\"!createMapButtonOn\" translate=\"lagTurkart\">\n" +
    "            </button>\n" +
    "\n" +
    "            <button class=\"btn btn-default btn-important\" data-ng-click=\"downloadMap()\"\n" +
    "                    ng-disabled=\"!mapAvailable\" translate=\"DownloadMap\">\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchOptionsPanel/mapGetFeatures/mapGetFeatures.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchOptionsPanel/mapGetFeatures/mapGetFeatures.html",
    "<div class=\"options-header-text\" data-ng-show=\"isAnyLayerToShow()\" data-ng-class=\"{isHeaderClose: foundLayersMenu.open}\"\n" +
    "  data-ng-click=\"foundLayersMenu.open = !foundLayersMenu.open\">\n" +
    "  <div class=\"sidenav-header-text pointer-cursor row\">\n" +
    "    <div class=\"col-xs-10\">\n" +
    "      <span translate=\"HereYouFind_text\"></span>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-2\">\n" +
    "      <span data-ng-show=\"!foundLayersMenu.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "      <span data-ng-show=\"foundLayersMenu.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div data-ng-repeat=\"layer in layers | filter:{show:'true'}\">\n" +
    "  <ul>\n" +
    "    <li class=\"sidenav-sections\" data-ng-show=\"!foundLayersMenu.open\" data-ng-click=\"toggleLayer(layer); $event.stopPropagation()\">\n" +
    "      <span data-ng-bind=\"layer.name | capitalize\"></span>\n" +
    "      <span class=\"backbtn glyphicon glyphicon-menu-down\" data-ng-show=\"!layer.open\"></span>\n" +
    "      <div class=\"upbtn\" data-ng-show=\"layer.open\">\n" +
    "        <span class=\"glyphicon glyphicon-menu-up\"></span>\n" +
    "      </div>\n" +
    "      <span data-ng-bind=\"getVisibleFeatures(layer)\" class=\"badge pull-right\"></span>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "  <div data-ng-show=\"layer.open && !foundLayersMenu.open\">\n" +
    "    <div dir-paginate=\"feature in layer.features | itemsPerPage: 1\" current-page=\"currentPage\" pagination-id=\"layer.id\">\n" +
    "      <ul class=\"closeable-subcontent\">\n" +
    "        <li>\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-4\"></div>\n" +
    "            <img data-ng-repeat=\"attribute in feature.attributes | limitTo:3\" data-ng-if=\"attribute[1].type=='symbol'\" class=\"image\"\n" +
    "              data-ng-src=\"{{attribute[1].url}}\">\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li data-ng-repeat=\"attribute in feature.attributes\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-5\">\n" +
    "              <span data-ng-if=\"attribute[1].type!='symbol'\" data-ng-bind=\"attribute[0] | capitalize\"></span>\n" +
    "            </div>\n" +
    "            <div data-ng-if=\"attribute[1].type=='picture'\" class=\"col-xs-5\" data-ng-click=\"showImage(attribute[1].url)\">\n" +
    "              <img class=\"scale-image\" data-ng-src=\"{{attribute[1].url}}\">\n" +
    "              <span data-ng-bind=\"attribute[1].name\"></span>\n" +
    "            </div>\n" +
    "            <div data-ng-if=\"attribute[1].type=='link'\" class=\"col-xs-5\">\n" +
    "              <a class=\"text-info\" href=\"{{attribute[1].url}}\" target=\"_blank\"> <span data-ng-bind=\"attribute[1].name\"></span></a>\n" +
    "            </div>\n" +
    "            <div data-ng-if=\"!attribute[1].type\" class=\"col-xs-5\">\n" +
    "              <span data-ng-bind=\"attribute[1]\"></span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div class=\"search-pagination\">\n" +
    "      <dir-pagination-controls max-size=\"6\" direction-links=\"true\" pagination-id=\"layer.id\" on-page-change=\"pageChangeHandler(newPageNumber)\">\n" +
    "      </dir-pagination-controls>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchOptionsPanel/searchOptionsPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchOptionsPanel/searchOptionsPanel.html",
    "<div class=\"search-panel\" ng-show=\"searchResults != undefined\" ng-controller=\"searchOptionsPanelController\">\n" +
    "    <div class=\"search-content\">\n" +
    "        <div class=\"info-text content-text-align\">\n" +
    "            <div>\n" +
    "                <span ng-if=\"activeSearchResult.source != 'mouseClick'\" translate=\"{{sourceDict[activeSearchResult.source]}}\"></span>\n" +
    "                <span ng-if=\"activeSearchResult.kommune!=''\">\n" +
    "                    <span> </span>\n" +
    "                    <span translate=\"In\"></span>\n" +
    "                    <span> {{activeSearchResult.kommune}} </span>\n" +
    "                    <span translate=\"Municipality\"></span>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "            <div ng-show=\"searchOptionsDict['elevationPoint'].text.value\">\n" +
    "                <span translate=\"HeightEstimatedByInterpolation_text\"></span>\n" +
    "                <span>{{searchOptionsDict['elevationPoint'].text.value}}</span>\n" +
    "                <span translate=\"MetersAboveSeaLevel\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"options-header-text\" data-ng-class=\"{isHeaderClose: optionsMenu.open}\" data-ng-click=\"optionsMenu.open = !optionsMenu.open\">\n" +
    "            <div class=\"sidenav-header-text pointer-cursor row\">\n" +
    "                <div class=\"col-xs-10\">\n" +
    "                    <span class=\"text-uppercase\" translate=\"hva_vil_du_gjore\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-2\">\n" +
    "                    <span data-ng-show=\"!optionsMenu.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "                    <span data-ng-show=\"optionsMenu.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <ul data-ng-show=\"!optionsMenu.open\">\n" +
    "            <li class=\"sidenav-sections\" data-ng-repeat=\"searchOption in searchOptionsOrder\" ng-mousedown=\"mouseDown(searchOptionsDict[searchOption])\" data-ng-hide=\"searchOptionsDict[searchOption].name === ''\">\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-1\">\n" +
    "                        <span class=\"icon-important\" ng-class=\"searchOptionsDict[searchOption].icon.value\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-11\">\n" +
    "                        <span ng-class=\"searchOptionsDict[searchOption].text.class\" translate=\"{{searchOptionsDict[searchOption].name}}\"></span>\n" +
    "                        <span class=\"nextbtn glyphicon glyphicon-menu-right\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "\n" +
    "        <div map-get-features></div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("components/transclusions/searchPanel/searchPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchPanel.html",
    "<div class=\"field-group\">\n" +
    "    <div class=\"inner-addon left-addon right-addon\">\n" +
    "        <input caret type=\"text\" ng-change=\"searchBarValueChanged()\" ng-model=\"searchBarModel\" name=\"searchBarName\" id=\"searchBarId\" placeholder=\"{{'search_text' | translate}}\"  />\n" +
    "        <i class=\"left-side glyphicon glyphicon-menu-hamburger has-tooltip\" data-ng-click=\"openNav()\">\n" +
    "            <span class=\"tooltip tooltip-absolute tooltip-info\" translate=\"menu\"></span>\n" +
    "        </i>\n" +
    "        <i ng-show=\"searchResults != undefined\" data-ng-click=\"cleanResults(); resetSearchPanel()\">\n" +
    "            <div class=\"cleanResults\">\n" +
    "                <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "            </div>\n" +
    "        </i>\n" +
    "        <i class=\"absolute-right-side glyphicon glyphicon-search has-tooltip\">\n" +
    "            <span class=\"tooltip tooltip-absolute tooltip-info\" translate=\"search\"></span>\n" +
    "        </i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-switch=\"searchPanelLayout\">\n" +
    "    <div ng-switch-when=\"searchResultsPanel\" search-results-panel></div>\n" +
    "    <div ng-switch-when=\"searchOptionsPanel\" search-options-panel></div>\n" +
    "    <div ng-switch-when=\"searchSeEiendomPanel\" search-se-eiendom-panel ng-init=\"showSelection()\"></div>\n" +
    "    <div ng-switch-when=\"searchKoordTransPanel\" search-koord-trans-panel></div>\n" +
    "    <div ng-switch-when=\"searchLagTurkartPanel\" search-lag-turkart-panel></div>\n" +
    "    <div ng-switch-when=\"searchLagFargeleggingskartPanel\" search-lag-fargeleggingskart-panel></div>\n" +
    "    <div ng-switch-when=\"searchLagNodplakatPanel\" search-lag-nodplakat-panel></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchResultsPanel/searchResultsPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchResultsPanel/searchResultsPanel.html",
    "<div class=\"search-panel\" ng-show=\"searchResults != undefined\">\n" +
    "  <div class=\"search-content no-padding-top\">\n" +
    "    <div data-ng-show=\"searchResults['ssr']\">\n" +
    "      <div class=\"isHeaderClose\" data-ng-click=\"placenamesResult.open = !placenamesResult.open\">\n" +
    "        <span translate=\"searchResult_placenames\"></span>\n" +
    "        <span data-ng-show=\"!placenamesResult.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "        <span data-ng-show=\"placenamesResult.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "      </div>\n" +
    "      <ul class=\"list-result\" data-ng-show=\"!placenamesResult.open\" data-ng-if=\"!isIosDevice()\">\n" +
    "        <li class=\"pointer-cursor\" ng-repeat=\"searchResult in searchResults['ssr']\" ng-mousedown=\"activatePosition(searchResult); showSearchOptionsPanel()\"\n" +
    "          ng-mouseover=\"mouseOver(searchResult)\">\n" +
    "          <span ng-if=\"!searchResult.kommune\" ng-bind=\"searchResult.name + ', '  + searchResult.navnetype\"></span>\n" +
    "          <span ng-if=\"searchResult.kommune\" ng-bind=\"searchResult.name + ', '  + searchResult.navnetype + ' i ' + searchResult.kommune\"></span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul class=\"list-result\" data-ng-show=\"!placenamesResult.open\" data-ng-if=\"isIosDevice()\">\n" +
    "        <li class=\"pointer-cursor\" ng-repeat=\"searchResult in searchResults['ssr']\" ng-mousedown=\"activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "          <span ng-if=\"!searchResult.kommune\" ng-bind=\"searchResult.name + ', '  + searchResult.navnetype\"></span>\n" +
    "          <span ng-if=\"searchResult.kommune\" ng-bind=\"searchResult.name + ', '  + searchResult.navnetype + ' i ' + searchResult.kommune\"></span>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <div data-ng-show=\"!placenamesResult.open\" dir-paginate=\"obj in placenameItems | itemsPerPage: 15 track by $index\"></div>\n" +
    "      <div data-ng-show=\"!placenamesResult.open\" class=\"search-pagination\">\n" +
    "        <dir-pagination-controls max-size=\"6\" direction-links=\"true\" on-page-change=\"pageChanged(newPageNumber)\">\n" +
    "        </dir-pagination-controls>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div data-ng-show=\"searchResults['matrikkelveg']\">\n" +
    "      <div class=\"isHeaderClose\" data-ng-click=\"roadsResult.open = !roadsResult.open\">\n" +
    "        <span translate=\"searchResult_roads\"></span>\n" +
    "        <span data-ng-show=\"!roadsResult.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "        <span data-ng-show=\"roadsResult.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "      </div>\n" +
    "      <ul class=\"list-result text-and-button\" data-ng-show=\"!roadsResult.open\" data-ng-if=\"!isIosDevice()\">\n" +
    "        <li class=\"pointer-cursor\" ng-mouseover=\"mouseOver(searchResult)\" ng-repeat=\"searchResult in searchResults['matrikkelveg']\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-8 move-up\" ng-mousedown=\"mouseOver(searchResult); activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "              <span ng-bind=\"searchResult.name + ', ' + searchResult.kommune\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4\">\n" +
    "              <div class=\"pull-right\">\n" +
    "                <button data-ng-click=\"husnum.open = !husnum.open\" type=\"button\" class=\"btn btn-default btn-toggle activeBtn\" data-ng-show=\"husnum.open\"><span translate=\"houseNr_txt\"></span></button>\n" +
    "                <button data-ng-click=\"husnum.open = !husnum.open\" type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-show=\"!husnum.open\"><span translate=\"houseNr_txt\"></span></button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12\" data-ng-hide=\"!husnum.open\">\n" +
    "              <ul class=\"husnum\">\n" +
    "                <li data-ng-repeat=\"husnum in searchResult.husnummer\" data-ng-click=\"husnummerChanged(searchResult, husnum)\">\n" +
    "\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-xs-4\">\n" +
    "                      <span translate=\"searchResult_houseNumber\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-8\">\n" +
    "                      <span data-ng-bind=\"husnum\"></span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul class=\"list-result text-and-button\" data-ng-show=\"!roadsResult.open\" data-ng-if=\"isIosDevice()\">\n" +
    "        <li class=\"pointer-cursor\" ng-repeat=\"searchResult in searchResults['matrikkelveg']\">\n" +
    "          <div class=\"row\">\n" +
    "            <div class=\"col-xs-8 move-up\" ng-mousedown=\"mouseOver(searchResult); activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "              <span ng-bind=\"searchResult.name + ', ' + searchResult.kommune\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-4\">\n" +
    "              <div class=\"pull-right\">\n" +
    "                <button data-ng-click=\"husnum.open = !husnum.open\" type=\"button\" class=\"btn btn-default btn-toggle activeBtn\" data-ng-show=\"husnum.open\"><span translate=\"houseNr_txt\"></span></button>\n" +
    "                <button data-ng-click=\"husnum.open = !husnum.open\" type=\"button\" class=\"btn btn-default btn-toggle\" data-ng-show=\"!husnum.open\"><span translate=\"houseNr_txt\"></span></button>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12\" data-ng-hide=\"!husnum.open\">\n" +
    "              <ul class=\"husnum\">\n" +
    "                <li data-ng-repeat=\"husnum in searchResult.husnummer\" data-ng-click=\"husnummerChanged(searchResult, husnum)\">\n" +
    "\n" +
    "                  <div class=\"row\">\n" +
    "                    <div class=\"col-xs-4\">\n" +
    "                      <span translate=\"searchResult_houseNumber\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-8\">\n" +
    "                      <span data-ng-bind=\"husnum\"></span>\n" +
    "                    </div>\n" +
    "                  </div>\n" +
    "                </li>\n" +
    "              </ul>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div data-ng-show=\"searchResults['matrikkeladresse'] && !searchResults['matrikkelveg']\">\n" +
    "      <div class=\"isHeaderClose\" data-ng-click=\"addressResult.open = !addressResult.open\">\n" +
    "        <span translate=\"searchResult_addresses\"></span>\n" +
    "        <span data-ng-show=\"!addressResult.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "        <span data-ng-show=\"addressResult.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "      </div>\n" +
    "      <ul class=\"list-result\" data-ng-show=\"!addressResult.open\" data-ng-if=\"!isIosDevice()\">\n" +
    "        <li ng-mouseover=\"mouseOver(searchResult)\" class=\"pointer-cursor\" ng-repeat=\"searchResult in searchResults['matrikkeladresse']\"\n" +
    "          ng-mousedown=\"activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "          <span ng-bind=\"searchResult.name + ' ' + searchResult.husnummer + ', ' + searchResult.kommune\"></span>\n" +
    "          </select>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <ul class=\"list-result\" data-ng-show=\"!addressResult.open\" data-ng-if=\"isIosDevice()\">\n" +
    "        <li class=\"pointer-cursor\" ng-repeat=\"searchResult in searchResults['matrikkeladresse']\" ng-mousedown=\"activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "          <span ng-bind=\"searchResult.name + ' ' + searchResult.husnummer + ', ' + searchResult.kommune\"></span>\n" +
    "          </select>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "    <div data-ng-show=\"searchResults['matrikkelnummer']\">\n" +
    "      <div class=\"isHeaderClose\" data-ng-click=\"cadastreResult.open = !cadastreResult.open\">\n" +
    "        <span translate=\"searchResult_cadastre\"></span>\n" +
    "        <span data-ng-show=\"!cadastreResult.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "        <span data-ng-show=\"cadastreResult.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "      </div>\n" +
    "      <ul class=\"list-result\" data-ng-show=\"!cadastreResult.open\" data-ng-if=\"!isIosDevice()\">\n" +
    "        <div ng-repeat=\"searchResult in searchResults['matrikkelnummer']\">\n" +
    "          <div ng-if=\"searchResult.url\">\n" +
    "            <li ng-mouseover=\"mouseOver(searchResult)\" class=\"pointer-cursor list-group-item-danger\"  data-ng-click=\"openShowEiendom(searchResult);\">\n" +
    "              <span>Matrikkelenheten har ingen kjente teiger. Klikk her får å se informasjon om eiendommen</span>\n" +
    "              <span ng-bind=\"searchResult.name + ', ' + searchResult.kommune\"></span>\n" +
    "              </select>\n" +
    "            </li>\n" +
    "          </div>\n" +
    "          <div ng-if=\"!searchResult.url\">\n" +
    "            <li ng-mouseover=\"mouseOver(searchResult)\" class=\"pointer-cursor\" ng-mousedown=\"activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "              <span ng-bind=\"searchResult.name + ', ' + searchResult.kommune\"></span>\n" +
    "              </select>\n" +
    "            </li>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </ul>\n" +
    "      <ul class=\"list-result\" data-ng-show=\"!cadastreResult.open\" data-ng-if=\"isIosDevice()\">\n" +
    "        <div ng-repeat=\"searchResult in searchResults['matrikkelnummer']\">\n" +
    "          <div ng-if=\"searchResult.url\">\n" +
    "            <li class=\"pointer-cursor list-group-item-danger\" ng-mousedown=\"openShowEiendom(searchResult);\">\n" +
    "              <span>Matrikkelenheten har ingen kjente teiger. Klikk her får å se informasjon om eiendommen</span>\n" +
    "              <span ng-bind=\"searchResult.name + ', ' + searchResult.kommune\"></span>\n" +
    "              </select>\n" +
    "            </li>\n" +
    "          </div>\n" +
    "          <div ng-if=\"!searchResult.url\">\n" +
    "            <li class=\"pointer-cursor\" ng-mousedown=\"activatePosition(searchResult); showSearchOptionsPanel()\">\n" +
    "              <span ng-bind=\"searchResult.name + ', ' + searchResult.kommune\"></span>\n" +
    "              </select>\n" +
    "            </li>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchSeEiendomPanel/searchSeEiendomPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchSeEiendomPanel/searchSeEiendomPanel.html",
    "<div class=\"search-panel\">\n" +
    "    <div class=\"header\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-xs-12\">\n" +
    "                <div class=\"text-ellipsis display-inline\">\n" +
    "                    <span class=\"header-icon icon-important\" data-ng-class=\"searchOptionsDict['seEiendom'].icon.value\"></span>\n" +
    "                    <span translate=\"seEiendom\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"pull-right\">\n" +
    "                    <div class=\"hide-button\" data-ng-click=\"eiendom.open = !eiendom.open\">\n" +
    "                        <span data-ng-show=\"!eiendom.open\" class=\"glyphicon glyphicon-menu-up\"></span>\n" +
    "                        <span data-ng-show=\"eiendom.open\" class=\"glyphicon glyphicon-menu-down\"></span>\n" +
    "                    </div>\n" +
    "                    <div class=\"closebtn\" data-ng-click=\"showSearchOptionsPanel(); hideEiendomMarkering()\">\n" +
    "                        <span class=\"glyphicon glyphicon-menu-right\"></span>\n" +
    "                        <span class=\"glyphicon glyphicon-menu-left\"></span>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"search-content\" data-ng-show=\"!eiendom.open\">\n" +
    "        <span data-ng-show=\"showFetchAdressSearch\"><i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i></span>\n" +
    "        <div data-ng-show=\"vegaddresse !== ''\">\n" +
    "            <span data-ng-show=\"!showFetchAdressSearch\" data-ng-bind=\"vegaddresse\"></span>\n" +
    "        </div>\n" +
    "        <div data-ng-show=\"cityName !== ''\">\n" +
    "            <span data-ng-show=\"!showFetchAdressSearch\" data-ng-bind=\"cityName\"></span>\n" +
    "        </div>\n" +
    "        <div class=\"new-section\" data-ng-class=\"{noMarginTop: vegaddresse == ''}\">\n" +
    "            <div class=\"row no-margin line-zebra-grey\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span translate=\"municipality_number\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showMatrikelInfoSearch\" data-ng-bind=\"searchOptionsDict['seEiendom'].kommunenr\"></span>\n" +
    "                    <span data-ng-show=\"showMatrikelInfoSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row no-margin\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span translate=\"municipality_name\"></span>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showFetchAdressSearch\" data-ng-bind=\"kommuneNavn\"></span>\n" +
    "                    <span data-ng-show=\"showFetchAdressSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row no-margin line-zebra-grey\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span translate=\"holding_number\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showMatrikelInfoSearch\" data-ng-bind=\"searchOptionsDict['seEiendom'].gardsnr\"></span>\n" +
    "                    <span data-ng-show=\"showMatrikelInfoSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row no-margin\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span translate=\"subholding_number\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showMatrikelInfoSearch\" data-ng-bind=\"searchOptionsDict['seEiendom'].bruksnr\"></span>\n" +
    "                    <span data-ng-show=\"showMatrikelInfoSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row no-margin line-zebra-grey\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span translate=\"lease_number\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showMatrikelInfoSearch\" data-ng-bind=\"searchOptionsDict['seEiendom'].festenr\"></span>\n" +
    "                    <span data-ng-show=\"showMatrikelInfoSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row no-margin\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span translate=\"section_number\"></span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showMatrikelInfoSearch\" data-ng-bind=\"searchOptionsDict['seEiendom'].seksjonsnr\"></span>\n" +
    "                    <span data-ng-show=\"showMatrikelInfoSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"row no-margin line-zebra-grey\">\n" +
    "                <div class=\"col-xs-4 no-padding\">\n" +
    "                    <span>Type</span>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-8\">\n" +
    "                    <span data-ng-show=\"!showMatrikelInfoSearch\" data-ng-bind=\"searchOptionsDict['seEiendom'].eiendomstype\"></span>\n" +
    "                    <span data-ng-show=\"showMatrikelInfoSearch\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"new-section\" ng-if=\"searchOptionsDict['seEiendom'].allResults\">\n" +
    "            <ul>\n" +
    "                <li class=\"sidenav-sections\" data-ng-click=\"allResults.open = !allResults.open\">\n" +
    "                    <div class=\"row\">\n" +
    "                        <div class=\"col-xs-11\">\n" +
    "                            <span translate=\"property_moreResults\"></span>\n" +
    "                        </div>\n" +
    "                        <div class=\"col-xs-1\">\n" +
    "                            <span data-ng-show=\"allResults.open\" class=\"nextbtn glyphicon glyphicon-menu-up\"></span>\n" +
    "                            <span data-ng-show=\"!allResults.open\" class=\"nextbtn glyphicon glyphicon-menu-down\"></span>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "            <ul data-ng-show=\"allResults.open\">\n" +
    "                <li class=\"sidenav-subsection\" data-ng-repeat=\"result in searchOptionsDict['seEiendom'].allResults\"\n" +
    "                    data-ng-click=\"selectResult(result); allResults.open = !allResults.open\">\n" +
    "                    <span data-ng-bind=\"result.matrikkeladresse\"></span>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"new-section\">\n" +
    "            <div class=\"row\">\n" +
    "                <div class=\"col-xs-12\">\n" +
    "                    <input type=\"checkbox\" ng-model=\"showSelectionCheckbox\" data-ng-click=\"eiendomMarkering(); showSelection();\"/>\n" +
    "                    <span translate=\"showSelection_txt\"></span>\n" +
    "                    <span data-ng-show=\"showSelectedPolygon\"><i class=\"fa fa-spinner fa-spin fa-fw\"></i></span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"new-section navigation-button pull-right\">\n" +
    "            <button class=\"btn btn-default btn-ordinary\"\n" +
    "                    data-ng-click=\"showSearchOptionsPanel()\" translate=\"close_txt\">\n" +
    "            </button>\n" +
    "            <button data-ng-disabled=\"!isGardsnrGreaterThanZero()\" type=\"button\" class=\"btn btn-default btn-important\" data-ng-click=\"openEindomInformasjon()\">\n" +
    "                <span translate=\"showMoreInformation\"></span>\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/transclusions/searchPanel/searchSeHavnivaaPanel/searchSeHavnivaaPanel.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/transclusions/searchPanel/searchSeHavnivaaPanel/searchSeHavnivaaPanel.html",
    "SeHavnivaa");
}]);

angular.module("mainAppBody.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("mainAppBody.html",
    "<div ng-switch=\"mapTypeLayout\">\n" +
    "    <div ng-switch-when=\"mapLayout\" map-layout></div>\n" +
    "    <div ng-switch-when=\"mapOverlaysLayout\" map-overlays-layout></div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("shared/mapLayout/mapLayout.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("shared/mapLayout/mapLayout.html",
    "<div class=\"logo-overlay no-print\">\n" +
    "    <a class=\"logo-kartverket\" href=\"http://kartverket.no/\" target=\"_parent\"></a>\n" +
    "</div>\n" +
    "<div class=\"ol-noembed ol-unselectable ol-control\">\n" +
    "  <button data-ng-click=\"disableEmbed()\" type=\"button\">\n" +
    "    <i class=\"fa fa-arrows-alt\"></i>\n" +
    "  </button>\n" +
    "</div>\n" +
    "<div id=\"mapDiv\" class=\"fullSizeMap\"></div>\n" +
    "");
}]);

angular.module("shared/mapOverlaysLayout/mapOverlaysLayout.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("shared/mapOverlaysLayout/mapOverlaysLayout.html",
    "<div id=\"main\" class=\"body-overlay no-print\"></div>\n" +
    "<div class=\"no-print\" map-overlays></div>\n" +
    "<div class=\"logo-overlay no-print\">\n" +
    "  <div ng-switch=\"getSelectedBaseLayerName()\">\n" +
    "    <div ng-switch-when=\"svalbard\">\n" +
    "      <a class=\"logo-polar\" href=\"http://www.npolar.no/no/\"><img src=\"assets/img/logo-poloarinstitutt.svg\"></a>\n" +
    "    </div>\n" +
    "    <div ng-switch-when=\"jan_mayen\">\n" +
    "      <a class=\"logo-polar\" href=\"http://www.npolar.no/no/\"><img src=\"assets/img/logo-poloarinstitutt.svg\"></a>\n" +
    "    </div>\n" +
    "    <div ng-switch-default>\n" +
    "      <a class=\"logo-kartverket\" href=\"http://kartverket.no/\"><img src=\"assets/img/KV_logo_staa.svg\"></a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"ol-geolocation ol-unselectable ol-control\" ng-hide=\"isGeolocationDisabled\">\n" +
    "  <button data-ng-click=\"getGeolocation()\" type=\"button\">\n" +
    "    <i class=\"fa fa-crosshairs\"></i>\n" +
    "  </button>\n" +
    "</div>\n" +
    "<div id=\"mapDiv\" class=\"fullSizeMap\"></div>\n" +
    "");
}]);
