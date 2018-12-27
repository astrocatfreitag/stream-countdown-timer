var seconds = 0;
var interval = Math.floor(Math.random() * 60);
var minute = Math.floor(Math.random() * 60);
var padMinute = String("00" + minute).slice(-2);

var WTF = setInterval(function() {
	var second = Math.floor(Math.random() * 60);
	var padSecond = String("00" + second).slice(-2);
	
	if (seconds == interval) {
		seconds = 0;
		interval = Math.floor(Math.random() * 60);
		minute = Math.floor(Math.random() * 60);
		padMinute = String("00" + minute).slice(-2);
	} else {
		seconds = seconds + 1;
	}
	
	document.getElementById("countdown").innerHTML = padSecond + ":" + padMinute;
	
}, 1000);
