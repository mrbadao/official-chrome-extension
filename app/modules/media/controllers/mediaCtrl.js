/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("modules.media.controllers", [])
		.controller("mediaCtrl", function (Config, cssInjector) {
			//inject css
			angular.forEach(Config.modules.media.cssFiles, function (css, idx) {
				cssInjector.add(css);
			});
		});