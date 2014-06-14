describe('angular-gs-apibase', function () {
  var ApiBase, url, prefix;

  function init () {
    url = 'http://gabeisgreat.ca';
    prefix = 'api/v1';
  }

  function bootStrap () {
    beforeEach(function () {
      angular.module('fakeModule', ['gs.apibase'])
      .config(function (ApiBaseProvider) {
        ApiBaseProvider.setUrl(url);
        ApiBaseProvider.setPrefix(prefix);
      });

      module('fakeModule');
    });

    beforeEach(inject(function (_ApiBase_) {
      ApiBase = _ApiBase_;
    }));

    it('sets a base url', function () {
      expect(ApiBase).toEqual('http://gabeisgreat.ca/api/v1');
    });
  }

  describe('no trailing /', function () {
    init();
    bootStrap();
  });

  describe('trailing / on url', function () {
    init();
    url = url + '/';
    bootStrap();
  });

  describe('trailing / on prefix', function () {
    init();
    prefix = '/' + prefix;
    bootStrap();
  });

  describe('trailing / on both', function () {
    init();
    url = url + '/';
    prefix = '/' + prefix;
    bootStrap();
  });
});
