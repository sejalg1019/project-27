// name spacing
const Engine=Matter.Engine; //universe
const World=Matter.World; //planet
const Bodies=Matter.Bodies; //objects
const Constraint = Matter.Constraint;

var engine1,world1,roof,rope1,rope2, rope3, rope4, rope5;
var bob1, bob2, bob3, bob4, bob5;


function setup() {
  createCanvas(1600,700);
  engine1 = Engine.create(); //creating engine1
  world1 = engine1.world; //creating world1 inside engine 1
  bob1 = new Bob(300,400);
  bob2 = new Bob(350,400);
  bob3 = new Bob(400,400);
  bob4 = new Bob(450,400);
  bob5 = new Bob(500,400);
  roof = new Roof(400,200,250,25);
  rope1 = new Rope(bob1.body,roof.body,-100,0);
  rope2 = new Rope(bob2.body,roof.body,-50,0);
  rope3 = new Rope(bob3.body,roof.body,0,0);
  rope4 = new Rope(bob4.body,roof.body,50,0);
  rope5 = new Rope(bob5.body,roof.body,100,0);
}

function draw() {
  background(255,255,255);
  Engine.update(engine1); //starting the engine
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-95,y:-95});
  }
}

