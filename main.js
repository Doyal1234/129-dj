song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreLeftWrist=0;
peter_pan="";
function preload() {
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
    }

function setup() {
canvas=createCanvas(600,500);
canvas.position(420,220)
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on("pose",gotPoses);
}

function modalLoaded() {
console.log("Modal Loaded");
}

function gotPoses(results) {
if(results.length>0) {
console.log(results);
scoreLeftWrist=results[0].pose.keypoints[9].score;
console.log("scoreLeftWrist= "+scoreLeftWrist);
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("Left wrist X is "+leftWristX+", Left wrist Y is "+leftWristY);
rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("Right wrist X is "+rightWristX+", right wrist Y is "+rightWristY);
}
}

function draw() {
    image(video,0,0,600,500);
    peter_pan=song2.isPlaying();
    console.log(peter_pan);
    fill("#FF0000");
    stroke("#FF0000");
    if(scoreLeftWrist>0.2) {
    circle(leftWristX,leftWristY,20);
    song1.stop();
    if(peter_pan==false){
    song2.play();
    }
    else{
    document.getElementById("song_name").innerHTML="Song Name:Peter Pan";
    }
    }
    }
    