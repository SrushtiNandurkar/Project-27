
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roofObject = new Roof(350,200,350,30);

	bobObject1 = new Bob(250,500);
	bobObject2 = new Bob(300,500);
	bobObject3 = new Bob(350,500);
	bobObject4 = new Bob(400,500);
	bobObject5 = new Bob(450,500);

	ropeObject1 = new Rope(bobObject1.body,roofObject.body,-125,0);
	ropeObject2 = new Rope(bobObject2.body,roofObject.body,-60,0);
	ropeObject3 = new Rope(bobObject3.body,roofObject.body,5,0);
	ropeObject4 = new Rope(bobObject4.body,roofObject.body,+65,0);
	ropeObject5 = new Rope(bobObject5.body,roofObject.body,+125,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ropeObject1.display();
  ropeObject2.display();
  ropeObject3.display();
  ropeObject4.display();
  ropeObject5.display();

  roofObject.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-730,y:0})
  }
}



