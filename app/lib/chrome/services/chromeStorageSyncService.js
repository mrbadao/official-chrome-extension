/**
 * Created by hieunc on 05/01/2016.
 */
angular.module("lib.chrome.services", [])
		.factory("chromeStorageSyncService", function () {
			var service = {};

			service.set = function (storegeObject, callback) {
				chrome.storage.sync.set(storegeObject, callback);
			};

			service.get = function (storegeKey, callback) {
				return chrome.storage.sync.get(storegeKey, callback);
			};

			return service;
		});