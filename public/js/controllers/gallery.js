'use strict';

angular.module('timelapse')
  .controller('galleryCtrl', function ($scope, photosModel) {
    $scope.images = photosModel.getPhotos();
    $scope.test = "it works!";
  });