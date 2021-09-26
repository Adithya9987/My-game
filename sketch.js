var spaceImg,space;
var astronaut,astronautImg,astronautGroups;
var meteor,meteorImg,meteorGroups;
var gamestate="play"
var gamestate= "end"
function preload(){
spaceImg = loadImage("space.jpg");
astronautImg = loadImage("astronaut.jpg");
meteorImg = loadImage("meteor.jpeg")
}

function setup() {
 createCanvas(600,600);
 space = createSprite(250,250);
 space.addImage("space",spaceImg);
 astronaut = createSprite(100,100);
 astronaut.addImage("astronaut",astronautImg);
 astronaut.scale=0.1
 meteor = createSprite(30,30);
 meteor.addImage("meteor",meteorImg);
 meteor.velocityY=0.2
 meteor.scale = 0.3


 meteorGroups = new Group();
}

function draw() {
 background(200)
 if(gamestate==="play"){

    if(keyDown("space")){
        astronaut.velocityY=-10
    }
    astronaut.velocityY=astronaut.velocityY+0.65
    if(keyDown("left")){
        astronaut.velocityX=-3
    }
    if(keyDown("right")){
        astronaut.velocityX=3
    }
    spawnMeteor();
    if(meteorGroups.isTouching(astronaut)){
        astronaut.velocityY=0
    }

 }
 if(gamestate==="end"){
     text("gameover",200,200)
 }
 drawSprites();
}
function spawnMeteor(){
    space = createSprite(250,250);
    astronaut = createSprite(100,100);
    meteor = createSprite(30,30);

     space.addImage("space",spaceImg);
     astronaut.addImage("astronaut",astronautImg);
     meteor.addImage("meteor",meteorImg);

     meteor.velocityY=0.2

     meteor.x=Math.round(random(120,400))

     meteor.lifetime=350
}
