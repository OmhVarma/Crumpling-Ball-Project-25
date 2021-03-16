
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  ground = new Ground(0,700,1600,20);

	paper = new Paper(100,690,40);

	dustbin1 = new Dustbin(475,630,20,100);
  dustbin3 = new Dustbin(645,630,20,100);
  dustbin2 = new Dustbin(560,680,175,20);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  k();
  drawSprites();
 
  ground.display();

  paper.display();

  dustbin1.display();
  dustbin3.display();
  dustbin2.display();

}

function k(){
  if (keyDown("space")){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20});
  }
}



