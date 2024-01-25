var noseX=0;
noseY=0;

function preload() {
nariz_gato= loadImage('https://i.postimg.cc/nL50Y3Z1/gatito.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
image(video,0,0,300,300);
fill("red");
stroke(255,0,0);
circle(noseX,noseY,20);
image(nariz_gato,noseX-20,noseY-5,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log("El modelo esta cargando");
}

function gotPoses(results){
    console.log(results);


if(results.length>0){

    console.info("nariz x = " + results[0].pose.nose.x);
    console.info("nariz en y = " + results[0].pose.nose.y);

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.info("nariz en x = " + noseX);
    console.info("nariz en y = " + noseY);
}
}
