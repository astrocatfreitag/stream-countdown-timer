var seconds = 0;
var minute = Math.floor(Math.random() * 60);
var padMinute = String("00" + minute).slice(-2);
var interval = Math.floor(Math.random() * 60);

var WTF = setInterval(function() {
	var second = Math.floor(Math.random() * 60);
	var padSecond = String("00" + second).slice(-2);
	var modsec = seconds % interval;
	
	if (modsec === 0) {
		minute = Math.floor(Math.random() * 60);
		padMinute = String("00" + minute).slice(-2);
		interval = Math.floor(Math.random() * 60);
	}
	
	if (seconds == 61) {
		seconds = Math.floor(Math.random() * 60);
	} else {
		seconds = seconds + 1;
	}
	
	document.getElementById("countdown").innerHTML = padSecond + ":" + padMinute;
	
}, 1000);
