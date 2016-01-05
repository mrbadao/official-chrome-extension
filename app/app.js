/**
 * Created by hieunc on 05/01/2016.
 */
angular.module('officialChromeApp', [
	'modules.user.controllers',
	'ngRoute'
]).
constant("Config", {
	"url": "http://localhost/api-official/api/"
}).
config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);
	//$locationProvider.hashPrefix = '!';

	$routeProvider
			.when("/home", {
				title: "Official CMS login",
				extraCss: [
					"app/modules/user/resources/css/login.css"
				],
				caseInsensitiveMatch: true,
				templateUrl: "app/modules/user/views/login.html",
				controller: "userCtrl"
			})
			.otherwise({redirectTo: '/home'});
}]).
run(['$rootScope', function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		$rootScope.extraCss = current.$$route.extraCss;
	})
}]);