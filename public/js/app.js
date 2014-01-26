// 'use strict';

var timelapse = angular.module('timelapse', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'webcam'
]);

timelapse.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/gallery.html',
        controller: 'galleryCtrl'
      })
      .when('/capture', {
        templateUrl: 'views/capture.html',
        controller: 'captureCtrl'
      })
      // .when('/animate', {
      //   templateUrl: 'views/timelapse.html',
      //   controller: 'timelapseCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  }]);
