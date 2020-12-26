  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle
var turn = 0;
var yellowline;
var particle1,particle2,particle3,particle4,particle5,particle6,particle7,particle8,particle9,particle10;

var gameState = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
}
 
function mousePressed(){
  if(gameState === "play"){
     particle = new Particle(mouseX, 10, 10);
     turn = turn+1  
  }
}

function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("100", 20, 520)
  text("500", 100, 520)
  text("250", 180, 520)
  text("750", 260, 520)
  text(" 10", 340, 520)
  text("1000", 420, 520)
  text("750", 500, 520)
  text("250", 580, 520)
  text("500", 660, 520)
  text("100", 740, 520)
 
   Engine.update(engine);
  
  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if (particle != null){
     particle.display();
   if(particle.body.position.y>760){
     if (particle.body.position.x<80||
      particle.body.position.x<800 && particle.body.position.x>720){
       score = score+100;
       particle = null;
     }
     else if (particle.body.position.x<160 && particle.body.position.x>80||
      particle.body.position.x<720 && particle.body.position.x>640){
      score = score+500;
      particle = null;
    }
    else if (particle.body.position.x<240 && particle.body.position.x>160||
      particle.body.position.x<640 && particle.body.position.x>560){
      score = score+250;
      particle = null;
    }
    else if (particle.body.position.x<320 && particle.body.position.x>240 ||
        particle.body.position.x<560 && particle.body.position.x>480){
      score = score+750;
      particle = null;
    }
    else if (particle.body.position.x<400 && particle.body.position.x>320){
      score = score+10;
      particle = null;
    }
    else if (particle.body.position.x<480 && particle.body.position.x>400){
      score = score+1000;
      particle = null;
    }
   }
  }
  if(turn>=5 && gameState === "play"){
    gameState = "end"
  }
  if(gameState === "end"){
    textSize(100)
    text("Game Over",100,350);
    console.log("Game Over")
  }
}


