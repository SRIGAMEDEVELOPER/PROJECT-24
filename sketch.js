
var paper,dustbin1,dustbin2,dustbin3,ground;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	engine=Engine.create();
	world = engine.world;
    
	dustbin1= new Dustbin(400,520,200,20);
	
	dustbin2=new Dustbin(290,480,20,100);
	
	dustbin3=new Dustbin(500,480,20,100);
	
	ground=new Ground(600,550,1200,50);

	paper=new Paper(1000,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  //Engine.update(engine);
	
    ground.display();
 
    paper.display();

    dustbin1.display();
	
	dustbin2.display();

	dustbin3.display();
 
  drawSprites();
 
}

function keyPressed (){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-60,y:-60});

}

}	


