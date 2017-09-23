angular.module('localStorage').factory('localStorageFactory', [
  '$parse',
  function ($parse) {
    /**
       * Global Vars
       */
    var storage = typeof window.localStorage === 'undefined' ? undefined : window.localStorage, supported = !(typeof storage == 'undefined' || typeof window.JSON == 'undefined');
    var privateMethods = {
        parseValue: function (res) {
          var val;
          try {
            val = JSON.parse(res);
            if (typeof val == 'undefined') {
              val = res;
            }
            if (val == 'true') {
              val = true;
            }
            if (val == 'false') {
              val = false;
            }
            if (parseFloat(val) == val && !angular.isObject(val)) {
              val = parseFloat(val);
            }
          } catch (e) {
            val = res;
          }
          return val;
        }
      };
    var publicMethods = {
        set: function (key, value) {
          if (!supported) {
            try {
              $.cookie(key, value);
              return value;
            } catch (e) {
              console.error('Local Storage not supported, make sure you have the $.cookie supported.');
            }
          }
          var saver = JSON.stringify(value);
          storage.setItem(key, saver);
          return privateMethods.parseValue(saver);
        },
        get: function (key) {
          if (!supported) {
            try {
              return privateMethods.parseValue($.cookie(key));
            } catch (e) {
              return null;
            }
          }
          var item = storage.getItem(key);
          return privateMethods.parseValue(item);
        },
        remove: function (key) {
          if (!supported) {
            try {
              $.cookie(key, null);
              return true;
            } catch (e) {
              return false;
            }
          }
          storage.removeItem(key);
          return true;
        },
        bind: function ($scope, key, def) {
          def = def || '';
          if (!publicMethods.get(key)) {
            publicMethods.set(key, def);
          }
          $parse(key).assign($scope, publicMethods.get(key));
          $scope.$watch(key, function (val) {
            publicMethods.set(key, val);
          }, true);
          return publicMethods.get(key);
        }
      };
    return publicMethods;
  }
]);