var car,wall;
var speed,weight;
function setup() {
  createCanvas(800,400);
  wall= createSprite(750,200, 50,390);
  car= createSprite(50, 200,30,30);
  car.velocityX =speed;
  speed = random(55,90);
  weight = random(400,350);
}

function draw() {
  background("black");  
  car.x=World.mouseX;
  car.y=World.mouseY;
if(car.x-wall.x<wall.width/2+car.width/2 )
  {car.shapeColor="red";
  wall.shapeColor="red";

}
else{car.shapeColor="green";
wall.shapeColor="green";

}
if (wall .x-car.x < (car.with+wall.with)/2)
{
car.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/800;

if(deformation>180)
{car.shapeColour = colour(255,0,0);}

}
if(deformation<180 && deformation>100)
{car.shapeColour = colour(230,230,0);}

if( deformation<100)
{car.shapeColour = colour(0,255,0);}
  

drawSprites();
}
