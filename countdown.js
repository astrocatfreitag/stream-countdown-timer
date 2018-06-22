var seconds = 0;
var minute = Math.floor(Math.random() * 60);
var padMinute = String("00" + minute).slice(-2);

var WTF = setInterval(function() {
	var second = Math.floor(Math.random() * 60);
	var padSecond = String("00" + second).slice(-2);
	var modsec = seconds % 60;
	if (modsec === 0) {
		minute = Math.floor(Math.random() * 60);
		padMinute = String("00" + minute).slice(-2);
	}
	document.getElementById("countdown").innerHTML = padSecond + ":" + padMinute;
	seconds = seconds + 1;
}, 1000);