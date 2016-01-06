/**
 * Created by hieunc on 05/01/2016.
 */
angular.module('officialChromeApp', [
	'modules.user.controllers',
	'modules.user.services',
	'angular.css.injector',
	'lib.chrome.services.notifications',
	'lib.chrome.services.storage',
	'ngRoute',
	'ngMessages'
], function ($provide) {
	// Prevent Angular from sniffing for the history API
	// since it's not supported in packaged apps.
	$provide.decorator('$window', function ($delegate) {
		$delegate.history = null;
		return $delegate;
	});
}).
constant("Config", {
	"url": "http://localhost/api-official/api/",
	"appIco": {
		"ico_128": "resources/img/app_icon_128.png",
		"ico_16": "resources/img/app_icon_16.png"
	},
	modules: {
		login: {
			cssFiles: [
				"app/modules/user/resources/css/login.css"
			]
		}
	}
}).
config([
	'$routeProvider',
	'$locationProvider',
	'$httpProvider',
	'cssInjectorProvider',
	function ($routeProvider, $locationProvider, $httpProvider, cssInjectorProvider) {
		//$locationProvider.html5Mode(true);
		//$locationProvider.hashPrefix = '!';
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		cssInjectorProvider.setSinglePageMode(true);
		$routeProvider
				.when("/home", {
					title: "Official CMS login",
					caseInsensitiveMatch: true,
					templateUrl: "app/modules/user/views/login.html",
					controller: "userCtrl"
				})
				.otherwise({redirectTo: '/home'});
	}]).
run(['$rootScope', function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		//$rootScope.extraCss = current.$$route.extraCss;
		//storage
	})
}]);