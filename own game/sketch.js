var playingC,nonPlayingC;
var nonCarImg,playingCarImg,roadImg,trafficImg,verticalRoadImg,whiteImg;
var nonPlayingGrp;
var verticalRoad;

function preload(){
  noncarImg = loadImage("images/non playing image.png");
  playingCarImg = loadImage("images/playing car.png");
  roadImg = loadImage("images/road.jpg");
  trafficImg = loadImage("images/traffic light.png");
  verticalRoadImg = loadImage("images/road2.jpg");
  whiteImg  = loadImage("images/white.jpg");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 
  verticalRoad = createSprite(displayWidth/2+300,displayHeight/2-150,200,400);
  verticalRoad.shapeColor=color(121,121,121);
 playingC = createSprite(displayWidth/2-600,460,70,40);
 playingC.addImage(playingCarImg);
 playingC.scale = 0.3;

 nonPlayingGrp=new Group();
}

function draw() {
  background(roadImg);
  image(whiteImg,displayWidth/2+300,displayHeight/2-50);

playingC.velocityX = 0;
  if(keyDown("right")){
    playingC.velocityX = 5;
  }
  if(playingC.isTouching(nonPlayingGrp)){
    playingC.velocityX = 0;
    nonPlayingC.velocityY = 0;
  }
  
 spawnNonPlayingCharacter();
  drawSprites();
}

function spawnNonPlayingCharacter(){
  if(frameCount%80==0){
    nonPlayingC = createSprite(displayWidth/2+300,displayHeight/2+150,40,70);
    nonPlayingC.addImage(noncarImg);
    nonPlayingC.velocityY = -4;
    nonPlayingC.scale=0.1;
    nonPlayingGrp.add(nonPlayingC);
  }
  
}