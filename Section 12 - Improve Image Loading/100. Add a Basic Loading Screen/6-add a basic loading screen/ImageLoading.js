var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = fileName;
}

function loadImages() {
	// next line is just an example, not using, will remove later
	var dataSet = {varName: carPic, theFile: "player1car.png"};

	var imageList = [
		{varName: carPic, theFile: "player1car.png"},
		{varName: roadPic, theFile: "track_road.png"},
		{varName: wallPic, theFile: "track_wall.png"}
		];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);
	}
}