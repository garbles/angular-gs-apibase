# angular-gs-apibase

[![Build Status](https://secure.travis-ci.org/garbles/angular-gs-apibase.png?branch=master)](https://travis-ci.org/garbles/angular-gs-apibase)

A service to set the base for your api services

### Installing

`bower install angular-gs-apibase`

### Using

Include the package in your application:

```javascript
angular.module('app', ['gs.apibase']);
.config(function (ApiBaseProvider) {
  ApiBaseProvider.setUrl('http://gabesgreatapi.com');
  ApiBaseProvider.setPrefix('api/v1');
});

.service('Something', function (ApiBase) {
  ApiBase; // => 'http://gabesgreatapi.com/api/v1'
});
```
