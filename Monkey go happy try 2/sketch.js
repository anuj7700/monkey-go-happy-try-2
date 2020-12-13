var monkey, monkeyImage, monkey_running, ground;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload() {
   monkeyImage = loadImage("sprite_0.png");
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {

  monkey = createSprite(100, 350, 20, 20);
  monkey.addAnimation("background", monkey_running)
  monkey.scale = 0.125;

  obstacleGroup = createGroup();
  ground = createSprite(200, 375, 400, 15 )
score = 0;

}


function draw() {
  background("white");
   text("Score: " + score,200, 50);
  if (monkey.y == 350) {
    monkey.velocityY = 0 ;
    
  }

  if (keyDown("space") && monkey.y >= 350) {
    monkey.velocityY = -5  ;
  }

  if (monkey.y <= 200) {
    monkey.velocityY = 5  ;
  }
  
  
  console.log(monkey.y);
  //add gravity
  
  spawnObstacles();
  drawSprites();
  if (obstacleGroup.isTouching(monkey)) {
    obstacleGroup.setVelocityXEach(0);
    monkey.addAnimation("background", monkeyImage);
    monkey.velocityY = 0;
  }
}

function spawnObstacles() {
  obstacle = createSprite(400, 350, 20, 20);
  obstacle.addAnimation("background", obstacleImage);
  obstacle.scale = 0.15;
  if (frameCount % 150 == 0) {
    obstacle.velocityX = -4;
  }
  obstacleGroup.add(obstacle);


}