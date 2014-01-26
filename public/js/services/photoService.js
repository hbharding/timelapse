'use strict';

angular.module('timelapse')
	.factory('photosModel', ['$http', function($http) {
		var photos = [];
		return {
			savePhoto: function(uri) {
				photos.unshift(uri);
			},
			getPhotos: function() {
				return photos;
			}
		}
	}]);