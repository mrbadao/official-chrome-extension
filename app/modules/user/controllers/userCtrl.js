/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.controllers", [])
		.controller("userCtrl", function ($scope, Config, cssInjector, userService, chromeStorageSyncService, chromeNotificationService) {
			//inject css
			angular.forEach(Config.modules.login.cssFiles, function (css, idx) {
				cssInjector.add(css);
			});

			//model
			$scope.user = {username: '', password: ''};
			$scope.loginResultData = {};
			chromeNotificationService.pushPotifications("123", "basic", 'hello', Config.appIco.ico_128, 'Hello word');
			//form submit
			$scope.loginFormSubmit = function () {
				var promiseLoginRequest = userService.loginRequest($scope.user);
				promiseLoginRequest.then(function (d) {
					if (d.status == 200) {
						$scope.loginResultData = d.data;
						switch ($scope.loginResultData.status) {
							case 200:
								$scope.loginForm.$setValidity("loginFailed", true);
								chromeStorageSyncService.set({"Auth.User": $scope.loginResultData.data}, null);
								//TODO redirect here
								break;
							default:
								$scope.loginForm.$setValidity("loginFailed", false);
								break;
						}
					} else {
						console.log(d.status);
					}
				});
			};
		});