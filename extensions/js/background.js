/**
 * Created by hieunc on 05/01/2016.
 */
function lauch() {
	chrome.app.window.create('index.html', {
		'id': 'main',
		'outerBounds': {
			'minWidth': 1170,
			'minHeight': 600,
			'maxWidth': 1170,
			'maxHeight': 600
		},
		//frame: 'none'
	});
}

function showNotification(storedData) {
	// Now create the notification
	chrome.notifications.create('chromeNotificationId', {
		type: 'basic',
		iconUrl: 'resources/img/app_icon_128.png',
		title: 'Don\'t forget!',
		message: 'You have  things to do. Wake up, dude!'
	}, function (notificationId) {
	});
}

chrome.app.runtime.onLaunched.addListener(lauch);