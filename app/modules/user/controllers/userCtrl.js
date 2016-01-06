/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.controllers", [
	'modules.user.services'
]).
controller("userCtrl", function ($scope, $location, Config, cssInjector, userService, chromeStorageSyncService, chromeNotificationService) {
	chromeStorageSyncService.get("Auth.User", function (object) {
		if (typeof object != undefined) {
			$location.path("/media");
		}
	});

	// /inject css
	angular.forEach(Config.modules.user.cssFiles, function (css, idx) {
		cssInjector.add(css);
	});

	//model
	$scope.user = {username: 'hieunc', password: '123456'};
	$scope.loginResultData = {};
	//chromeNotificationService.pushPotifications("123", "basic", 'hello', Config.appIco.ico_128, 'Hello word');
	//form submit
	$scope.loginFormSubmit = function () {
		$location.path("/media");
		var promiseLoginRequest = userService.loginRequest($scope.user);
		promiseLoginRequest.then(function (d) {
			if (d.status == 200) {
				$scope.loginResultData = d.data;
				switch ($scope.loginResultData.status) {
					case 200:
						$scope.loginForm.$setValidity("loginFailed", true);
						chromeStorageSyncService.set({"Auth.User": $scope.loginResultData.data}, null);
						//TODO redirect here
						$location.path("/media");
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