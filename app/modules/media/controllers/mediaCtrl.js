/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.media.controllers", [
	'lib.chrome.services.storage',
	'modules.media.services'
]).
controller("mediaCtrl", function ($scope, $location, Config, cssInjector, chromeStorageSyncService, mediaService) {
	//inject css
	angular.forEach(Config.modules.media.cssFiles, function (css, idx) {
		cssInjector.add(css);
	});

	var postOption = {};

	$scope.mediaData = {};
	chromeStorageSyncService.get("Auth.User", function (object) {
		console.log(typeof object);
		if (typeof object != undefined) {
			postOption.api_access_key = object["Auth.User"].api_access_key;
		} else {
			//$location.path("/home");
		}
	});

	var promiseGetMediasRequest = mediaService.getMedias(postOption);

	promiseGetMediasRequest.then(function (d) {
		if (d.status == 200) {
			$scope.mediaData = d.data;
			console.log($scope.mediaData.status);
			switch ($scope.mediaData.status) {
				case 200:
					console.log($scope.mediaData);
					break;
				default:
					//$location.path("/home");
					break;
			}
		} else {
			console.log(d.status);
		}
	});
});