if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports){
  module.exports = 'gs.apibase';
}

(function(window, angular, undefined) {'use strict';

angular.module('gs.apibase', [])
.provider('ApiBase', [function () {
  var _url = '',
    _prefix = '';

  this.setUrl = function (url) {
    _url = url;
  };

  this.setPrefix = function (prefix) {
    _prefix = prefix;
  };

  this.$get = [function () {
    if (_url.slice(_url.length - 1) === '/') {
      _url = _url.slice(0, _url.length - 1);
    }

    if (_prefix[0] === '/') {
      _prefix = _prefix.slice(1);
    }

    return _url + '/' + _prefix;
  }];
}]);


})(window, window.angular);
