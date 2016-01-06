/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.controllers", [])
		.controller("userCtrl", function ($scope, Config, cssInjector, userService) {
			//inject css
			angular.forEach(Config.modules.login.cssFiles, function (css, idx) {
				cssInjector.add(css);
			});

			//model
			$scope.user = {username: '', password: ''};
			$scope.loginResultData = {};

			//check error
			$scope.hasError = function () {
				return typeof $scope.loginResultData.status != undefined && $scope.loginResultData.status != 200;
			};

			//form submit
			$scope.loginFormSubmit = function () {
				console.log(loginForm.$error);
				var promiseLoginRequest = userService.loginRequest($scope.user);
				promiseLoginRequest.then(function (d) {
					if (d.status == 200) {
						$scope.loginResultData = d.data;
						switch ($scope.loginResultData.status) {
							case 200:
								//TODO redirect here
								break;
						}
					} else {
						console.log(d.status);
					}
				});
			};
		});