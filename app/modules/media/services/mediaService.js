/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.media.services", [
	'officialChromeApp.services'
]).factory("mediaService", function ($http, Config, appService) {
	var services = appService;

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
	return services;
});