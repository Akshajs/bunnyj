var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var orange, orangeImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  drawSprites();
 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 ==0) {
    if (select_sprites == 1) {
    
    }
    else{

    }
  }
 if (keyDown("right")){
   rabbit.x = rabbit.X +4;
 }
 if (keyDown("left")){
  rabbit.x = rabbit.X -4;
}
function createApples() {
    apple = createSprite(random(50,350),40,10,10)
    appleImg = loadImage("apple.png");
    apple.velocityY = -3
    apple.lifetime = 150;
   
 }
 
 function createOrange() {
  orange = createSprite(random(50,350),40,10,10)
  orangeImg = loadImage("orangeLeaf.png");
  orange.velocityY = -3
  orange.lifetime = 150;
 }
   
  
 

