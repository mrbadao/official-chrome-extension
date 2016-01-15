/**
 * Created by hieunc on 05/01/2016.
 */
angular.module('officialChromeApp', [
	'angular.css.injector',
	'lib.chrome.services.notifications',
	'lib.chrome.services.storage',
	'ngRoute',
	'modules.user.controllers',
	'modules.media.controllers'
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
		user: {
			cssFiles: [
				"app/modules/user/resources/css/login.css"
			]
		},
		media: {
			cssFiles: [
				"app/modules/media/resources/css/media.css"
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
		$httpProvider
		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		cssInjectorProvider.setSinglePageMode(true);
		$routeProvider
				.when("/home", {
					title: "Official CMS login",
					caseInsensitiveMatch: true,
					templateUrl: "app/modules/user/views/login.html",
					controller: "userCtrl"
				})
				.when("/media", {
					title: "Official CMS login",
					caseInsensitiveMatch: true,
					templateUrl: "app/modules/media/views/media.html",
					controller: "mediaCtrl"
				})
				.otherwise({redirectTo: '/media'});
	}]).
run(['$rootScope', function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
		//$rootScope.extraCss = current.$$route.extraCss;
		//storage
	})
}]);