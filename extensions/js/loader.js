/**
 * Created by hieunc on 05/01/2016.
 */

var loadImage = function (uri, callback) {
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onload = function () {
		callback(window.URL.createObjectURL(xhr.response), uri);
	};
	xhr.open('GET', uri, true);
	xhr.send();
};