/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.services", [])
		.factory("userService", function ($http, Config) {
			var services = {};

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
					url: Config.url + "media/getmedia",
					data: postData
				}).then(function successCallback(response) {
					return response;
				}, function errorCallback(response) {
					return response;
				});
			};

			return services;
		});