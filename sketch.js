var car, wall;
var speed, weight;
var Canvas_height, Canvas_width;
var deformation;
var invisiline;

function setup() {
  //createSprite(400, 200, 50, 50);

  Canvas_height = 400;
  Canvas_width = 1600;
  createCanvas(Canvas_width,Canvas_height);


  speed = random(55,90);
  weight = random(400,1500);

  invisiline = createSprite(1500,200,10,400);
  invisiline.visible = false;

  car = createSprite(50,200,50,35);
  car.velocityX = speed;
  car.shapeColor = "blue";
 // car.debug = true;

  wall = createSprite(1200,200,60,Canvas_height/2);
  wall.shapeColor = "blue";
 // wall.debug = true;
  
  }
function draw() {
  background("black");  
 
   if((wall.x - car.x) < (car.width/2 + wall.width/2)) {
    deformation = 0.5 * weight * speed * speed / 22500;

   if (deformation < 100) {
     car.shapeColor = "green";
   }

   if (deformation > 100 && deformation < 180) {
     car.shapeColor = "yellow";
   }

   if (deformation > 180) {
     car.shapeColor = "red";
   }

  }
  else{
    wall.shapeColor = "blue";
    car.shapeColor = "blue";
   }
 
   car.collide(invisiline);

   drawSprites();
}