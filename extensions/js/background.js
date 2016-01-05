/**
 * Created by hieunc on 05/01/2016.
 */
chrome.app.runtime.onLaunched.addListener(function () {
	chrome.app.window.create('index.html', {
		'outerBounds': {
			'width': 800,
			'height': 500
		},
		//frame: 'none'
	});
});