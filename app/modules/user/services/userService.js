/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.services", [
	'officialChromeApp.services'
]).factory("userService", function ($http, Config, appService) {
	var services = appService;

	//call login API
	services.loginRequest = function (user) {
		var postData = {
			"data": user
		};
		return $http({
			headers: {
				"Content-Type": "application/json"
			},
			method: "POST",
			dataType: "json",
			url: Config.url + "users/login",
			data: postData
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			return response;
		});
	};

	services.checkToken = function (token) {
		return $http({
			headers: {
				"Content-Type": "application/json",
				"X-TOKEN": token
			},
			method: "POST",
			dataType: "json",
			url: Config.url + "users/checkToken"
		}).then(function successCallback(response) {
			return response;
		}, function errorCallback(response) {
			return response;
		});
	};

	return services;
});