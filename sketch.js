var fixed, moving

function setup() {
  createCanvas(600,600);
  
  fixed = createSprite(300, 200, 50, 50);
  fixed.shapeColor = "white";

  moving = createSprite(200,100,50,50);
  moving.shapeColor = "blue";

  fixed.debug = true;
  moving.debug = true;
}

function draw() {
  background(0); 
  
  moving.x = mouseX;
  moving.y = mouseY;
  
  if (moving.x - fixed.x < fixed.width/2 + moving.width/2 && fixed.x - moving.x < fixed.width/2 + moving.width/2 && 
  (moving.y - fixed.y < fixed.width/2 + moving.width/2 && fixed.y - moving.y < fixed.width/2 + moving.width/2)){
    
    moving.shapeColor = "red";
    fixed.shapeColor = "orange";
  } else{
    moving.shapeColor = "green";
    fixed.shapeColor = "white";
  }
  
  drawSprites();
}