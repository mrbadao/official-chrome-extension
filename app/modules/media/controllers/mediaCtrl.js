/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.media.controllers", [
	'lib.chrome.services.storage',
	'modules.media.services'
]).
controller("mediaCtrl", function ($scope, $location, Config, cssInjector, chromeStorageSyncService, mediaService) {
	var postOption = {};
	//inject css
	angular.forEach(Config.modules.media.cssFiles, function (css, idx) {
		cssInjector.add(css);
	});

	$scope.mediaData = {};
	chromeStorageSyncService.get("Auth", function (object) {
		console.log(typeof object.Auth != 'undefined');
		if (typeof object.Auth != 'undefined') {
			postOption.api_access_key = object.Auth.api_access_key;
			var promiseGetMediasRequest = mediaService.getMedias(postOption);
			promiseGetMediasRequest.then(function (d) {
				if (d.status == 200) {
					$scope.mediaData = d.data;
					switch ($scope.mediaData.status) {
						case 200:
							angular.forEach($scope.mediaData.data, function (media, idx) {
								var promiseImageLoader = mediaService.loadImage(media.Media.media_thumbnail);
								promiseImageLoader.then(function (url) {
									media.Media.media_thumbnail = url;
								});
							});
							break;
						default:
							$location.path("/home");
							break;
					}
				} else {
					console.log(d.status);
				}
			}, function (d) {
				console.log(d.status);
			});
		} else {
			$location.path("/home");
		}
	});
});