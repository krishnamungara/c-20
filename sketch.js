var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect=createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

movingRect=createSprite(400,200,100,50)
movingRect.shapeColor="blue";
movingRect.debug=true;
}

function draw() {
  background("red"); 
  
 movingRect.x=mouseX;
 movingRect.y=mouseY; 

if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
else{
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
}





  drawSprites();
}