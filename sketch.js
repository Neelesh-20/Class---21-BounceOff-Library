var fixedRect, movingRect, object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(600, 200, 20, 20);
  object2 = createSprite(100, 200, 20, 20);
  object1.velocityX = -4;
  object2.velocityX = 4;
  object1.shapeColor = "red";
  object2.shapeColor = "blue"
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  Bounce(movingRect, fixedRect);
  Bounce(object1, object2)
  drawSprites();
}
