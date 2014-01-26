'use strict';

angular.module('timelapse')
  .controller('captureCtrl', function ($scope, photosModel) {
    $scope.images = photosModel.getPhotos();
    $scope.test = "it works!";
  });