/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.controllers", [])
		.controller("userCtrl", function ($scope, userService) {
			$scope.user = {username: '', password: ''};
			$scope.loginFormSubmit = function () {
				userService.login($scope.user);
			};
		});