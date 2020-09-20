
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new Ground(200,100,210,30)

	bobObject1= new Bobs(120,300);
	bobObject2= new Bobs(160,300);
	bobObject3= new Bobs(200,300);
	bobObject4= new Bobs(240,300);
	bobObject5= new Bobs(280,300);

	rope1= new Rope (bobObject1.body,{x:120,y:100});
	rope2= new Rope (bobObject2.body,{x:160,y:100});
	rope3= new Rope (bobObject3.body,{x:200,y:100});
	rope4= new Rope (bobObject4.body,{x:240,y:100});
	rope5= new Rope (bobObject5.body,{x:280,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roofObject.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}
}

