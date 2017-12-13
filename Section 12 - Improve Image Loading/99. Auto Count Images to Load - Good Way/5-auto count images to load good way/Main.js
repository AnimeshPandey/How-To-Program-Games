var canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	loadImages();
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();
	carReset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	carMove();
	carTrackHandling();
}

function drawAll() {
	drawTracks();
	carDraw();
} 