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
		if (typeof object != undefined) {
			postOption.api_access_key = object["Auth.User"].api_access_key;
		} else {
			//$location.path("/home");
		}
	});
	var res = '';
	// for each image with no imageUrl, start a new loader
	//$scope.loadImage = function () {
	//	var res = '';
		loadImage(
				"http://img04.deviantart.net/f183/i/2014/342/d/5/akame_ga_kill___akame_cosplay_by_voizofsnow-d8943bf.jpg",
				function (blob_uri, requested_uri) {
					res = blob_uri;
				});
	//};

	console.log(res);

	//loadImage(
	//		"http://img04.deviantart.net/f183/i/2014/342/d/5/akame_ga_kill___akame_cosplay_by_voizofsnow-d8943bf.jpg",
	//		function (blob_uri, requested_uri) {
	//			console.log(blob_uri);
	//		});

	var promiseGetMediasRequest = mediaService.getMedias(postOption);
	promiseGetMediasRequest.then(function (d) {
		if (d.status == 200) {
			$scope.mediaData = d.data;
			//console.log($scope.mediaData);
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