const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	crumpledPaper = new Paper();
	
    launcher = new Launcher(crumpledPaper.body,{x:370,y:270});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  dustbinObj.display();
  crumpledPaper.display();
  

  
 
}


function mouseDragged(){
    Matter.Body.setPosition(crumpledPaper.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}


