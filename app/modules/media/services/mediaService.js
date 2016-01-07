/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.media.services", [])
		.factory("mediaService", function ($http, $q, $rootScope, Config) {
			var services = {};

			//call login API
			services.getMedias = function (option) {
				return $http({
					headers: {
						"Content-Type": "application/json",
						"X-TOKEN": option.api_access_key
					},
					method: "GET",
					dataType: "json",
					url: Config.url + "media/getmedia"
				}).then(function successCallback(response) {
					return response;
				}, function errorCallback(response) {
					return response;
				});
			};

			//conver media url with to blob url
			services.loadImage = function (url) {
				var deferred = $q.defer();
				loadImage(url, function (blob_uri) {
					if (blob_uri) {
						deferred.resolve(blob_uri);
					}
				});
				return deferred.promise;
			};


			return services;
		});