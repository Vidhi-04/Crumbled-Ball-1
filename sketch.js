var log1,log2,log3;
var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  rectMode(CENTER);
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,570,1200,20);
  log1=new Bin(1000,550,200,20);
  log2=new Bin(1090,490,20,100);
  log3=new Bin(910,490,20,100);
  ball=new Ball(80,450);
  
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();

  drawSprites();

}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
	}
}