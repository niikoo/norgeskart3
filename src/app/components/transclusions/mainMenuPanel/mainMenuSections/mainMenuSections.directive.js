angular.module('mainMenuSections')
    .directive('mainMenuSections', ['mainMenuPanelFactory','$location','ISY.MapAPI.Map','isyTranslateFactory','$translate', 'localStorageFactory', '$timeout', '$window',
        function(mainMenuPanelFactory, $location, map, isyTranslateFactory, $translate, localStorageFactory, $timeout, $window) {
            return {
                templateUrl: 'components/transclusions/mainMenuPanel/mainMenuSections/mainMenuSections.html',
                restrict: 'A',
                link: function(scope){
                    scope.projects = mainMenuPanelFactory.getAllProjects();
                    scope.languages = isyTranslateFactory.getAllLanguages();

                    scope.activateProject = function (project) {
                        scope.visibleLayersCount = 0;
                        if (project.isSelected){
                            scope.showMainMenuGroupLayers();
                        }else{
                            mainMenuPanelFactory.setProjectById(project.id);
                            var search = $location.search();
                            search['project'] = project.id;
                            search.layers = "";
                            setSearch(map.GetUrlObject(), search.layers);
                        }
                    };

                    var setSearch = function (obj, layers) {
                        if (!angular.equals(obj, $location.search())) {
                            var newSearch = angular.extend($location.search(), obj);
                            newSearch.layers = layers;
                            $location.search(newSearch);
                            $timeout(function () {
                                window.location.reload();
                            }, 0);
                        }
                    };

                    scope.changeLanguage = function (langId) {
                        isyTranslateFactory.setCurrentLanguage(langId);
                        map.SetTranslateOptions(isyTranslateFactory.getTranslateOptionsByActiveLanguage());
                        $translate.use(langId);
                        localStorageFactory.set("activeLanguage", langId);
                    };

                    $( document ).ready(function() {
                        scope.visibleLayersCount = map.GetVisibleSubLayers().length;
                    });

                    scope.sendFeedback = function () {
                        var url='mailto:post@kartverket.no?subject=norgeskart.no';
                        $window.open(url, '_self');
                    };

                }
            };
        }]);