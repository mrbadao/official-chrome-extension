/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.media.controllers", [
	'lib.chrome.services.storage',
	'ngFileUpload',
	'modules.media.services'
]).
controller("mediaCtrl", function ($scope, $location, Upload, $timeout, Config, cssInjector, chromeStorageSyncService, mediaService) {
	var postOption = {};
	//inject css
	angular.forEach(Config.modules.media.cssFiles, function (css, idx) {
		cssInjector.add(css);
	});

	$scope.mediaData = {};
	chromeStorageSyncService.get("Auth", function (object) {
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

	$scope.media = {name: '1', description: '1', fileUpload: ''};
	$scope.uploadFiles = function (file, errFiles) {
		$scope.media.fileUpload = file;
		console.log(errFiles);
		$scope.media.errFile = errFiles && errFiles[0];
		//if (file) {
		//	file.upload = Upload.upload({
		//		url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
		//		data: {file: file}
		//	});
		//
		//	file.upload.then(function (response) {
		//		$timeout(function () {
		//			file.result = response.data;
		//		});
		//	}, function (response) {
		//		if (response.status > 0)
		//			$scope.errorMsg = response.status + ': ' + response.data;
		//	}, function (evt) {
		//		file.progress = Math.min(100, parseInt(100.0 *
		//				evt.loaded / evt.total));
		//	});
		//}
	};

	$scope.submitNewMedia = function () {
		console.log($scope.media);
	}
});