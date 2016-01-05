/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.services", [])
		.factory("userService", function ($http, Config) {
			var services = {};

			//call login API
			services.login = function (user) {
				var postData = {
					"data": user
				};
				$http({
					headers: {
						"Content-Type": "application/json"
					},
					method: "POST",
					dataType: "json",
					url: Config.url + "users/login",
					data: postData
				}).then(function successCallback(response) {
					console.log(response);
				}, function errorCallback(response) {
					console.log(response);
				});
			};

			return services;
		});