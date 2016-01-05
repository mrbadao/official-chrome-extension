/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.user.controllers", [])
		.controller("userCtrl", function ($scope) {
			$scope.user = {username: '', password: ''};
			$scope.loginFormSubmit = function () {
				alert($scope.user.username);
			};
		});