var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



//generate random number+
var rand =  Math.round(random(1,100))

}
function createApples(){

  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.scale = 0.05;
  apple.addImage(appleImg);
  apple.velocityY = 3;  

  apple.lifetime = 100; 

}

function createLeaf(){
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.scale = 0.1;
  leaf.addImage(leafImg);
  leaf.velocityY = 3;

  leaf.lifetime = 100;

}

function draw() {
  background("white");

  rabbit.x = World.mouseX

  console.log(frameCount);

  edges= createEdgeSprites();
  rabbit.collide(edges);

 
  //Spawn Apple
  //spawnApple();

  //Spawn Leaf
  //spawnLeaf();
  
  var select_sprites = Math.round(random(1,2)); 
  if (select_sprites == 1)spawnApple(); 
  else if (select_sprites == 2) spawnLeaf(); 
  
  drawSprites();
 
}


//function to spawn the apples
function spawnApple (){
  // write your code here 
 if(frameCount % 80 == 0){
   //if(select_sprites == 1){
      apple = createSprite(random(50, 350), 40, 10, 10);
      apple.scale = 0.05;
      apple.addImage(appleImg);
      apple.velocityY = 3;  
    
      apple.lifetime = 100; 
      apple.depth = rabbit.depth;
      rabbit.depth = rabbit.depth + 1;

    //}
  }
}    
function spawnLeaf (){ 
  if(frameCount % 80 == 0){ 
    //if(select_sprites == 2){
      leaf = createSprite(random(50, 350), 40, 10, 10); 
      leaf.scale = 0.1; 
      leaf.addImage(leafImg); 
      leaf.velocityY = 3;
      leaf.lifetime = 100;
      leaf.depth = rabbit.depth; 
      rabbit.depth = rabbit.depth + 1;

    //}  
  }
}


