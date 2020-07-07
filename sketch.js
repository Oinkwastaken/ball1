var dustpin1,Ground
var paper1,paperObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Ground=new ground(400,680,800,40)
	Engine.run(engine);
	paper1=new paper(100,500,10,10)
	dustpin1=new dustpin(500,660,100,35)
	dustpin2=new dustpin(560,615,20,90)
	dustpin3=new dustpin(440,615,20,90)
	dustpin4=new dustpin(75,700,20,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
  dustpin1.display()
  dustpin2.display()
  dustpin3.display()
  Ground.display()
  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:1,y:-1});
}
  drawSprites();
 
}


