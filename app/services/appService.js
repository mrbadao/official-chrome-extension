/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("officialChromeApp.services", [])
		.factory("appService", function ($q) {
			var services = {};
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