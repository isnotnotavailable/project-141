function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose', gotPose);
}
function modelLoaded() {
	console.log(modelLoaded)
}

function gotPose(results) {
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.X;
		noseX = results[0].pose.nose.X;
		console.log("noseX" + noseX + "noseY" + noseY);
	}
}
function draw() {
	game()
}