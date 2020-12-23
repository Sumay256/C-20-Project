var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
 car.shapeColor="blue";
 wall=createSprite(1500,200,60,200);

 speed=random(50,100);
 weight=random(500,1500);
 car.velocityX=speed;
}

function draw() {
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  if(deformation>100&&deformation<180){
    car.shapeColor=color(230,230,0);
  }
  }
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  }

  background(70);  
  drawSprites();
}