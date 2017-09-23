angular.module('isyTranslate').factory('customLoader', [
  '$http',
  '$q',
  'translations',
  function ($http, $q, translations) {
    return function (options) {
      var deferred = $q.defer();
      deferred.resolve(translations[options.key]);
      return deferred.promise;
    };
  }
]).config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.useLoader('customLoader', {});
    $translateProvider.use('no');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]).factory('isyTranslateFactory', function () {
  var languages = [
      {
        id: 'no',
        title: 'Bokm\xe5l',
        active: true
      },
      {
        id: 'nn',
        title: 'Nynorsk',
        active: false
      },
      {
        id: 'en',
        title: 'English',
        active: false
      }
    ];
  var translateOptions = {
      no: {
        east: '&Oslash; ',
        north: 'N ',
        start_modify: 'Velg objekt og starte redigering.',
        add_layer_start_drawing: 'Klikk for \xe5 starte tegning',
        add_layer_continue_drawing: 'Klikk for \xe5 fortsette \xe5 tegne.',
        add_layer_modify_object: 'Velg objekt og starte redigering.',
        start_drawing: 'Klikk for \xe5 starte tegning',
        continue_drawing: 'Klikk for \xe5 fortsette \xe5 tegne polygon. Klikk i siste punktet for \xe5 avslutte polygon.',
        start_measure: 'Klikk for \xe5 starte tegning',
        continue_measure: 'Klikk for \xe5 fortsette \xe5 tegne polygon. Klikk i siste punktet for \xe5 avslutte polygon.',
        start_measure_line: 'Klikk for \xe5 starte tegning',
        continue_measure_line: 'Klikk for \xe5 fortsette \xe5 tegne linjen. Klikk i siste punktet for \xe5 avslutte linjen.'
      },
      en: {
        east: 'E ',
        north: 'N ',
        start_modify: 'Select object and start modify.',
        add_layer_start_drawing: 'Click to start drawing',
        add_layer_continue_drawing: 'Click to continue drawing.',
        add_layer_modify_object: 'Select object and start modify.',
        start_drawing: 'Click to start drawing',
        continue_drawing: 'Click to continue drawing the polygon. Click the last point to end the polygon.',
        start_measure: 'Click to start drawing',
        continue_measure: 'Click to continue drawing the polygon. Click the last point to end the polygon.',
        start_measure_line: 'Click to start drawing',
        continue_measure_line: 'Click to continue drawing the line. Click the last point to end the line.'
      }
    };
  return {
    getCurrentLanguage: function () {
      for (var i = 0; i < languages.length; i++) {
        if (languages[i].active === true) {
          return languages[i];
        }
      }
    },
    getAllLanguages: function () {
      return languages;
    },
    setCurrentLanguage: function (id) {
      for (var i = 0; i < languages.length; i++) {
        languages[i].active = languages[i].id === id;
      }
    },
    getTranslateOptionsByActiveLanguage: function () {
      return translateOptions[this.getCurrentLanguage().id];
    }
  };
});