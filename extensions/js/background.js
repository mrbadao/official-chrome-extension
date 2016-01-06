/**
 * Created by hieunc on 05/01/2016.
 */
chrome.app.runtime.onLaunched.addListener(function () {
	chrome.app.window.create('index.html', {
		'outerBounds': {
			'width': 1085,
			'height': 575
		},
		//frame: 'none'
	});
});