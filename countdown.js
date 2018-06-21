var seconds = 0;
var minute = Math.floor(Math.random() * 60);

var y = setInterval(function() {
	var second = Math.floor(Math.random() * 60);
	seconds = seconds + 1;
	var modsec = seconds % 60;
	if (modsec === 0) {
		minute = Math.floor(Math.random() * 60);
	}
	document.getElementById("countdown").innerHTML = second + ":" + minute;
}, 1000);