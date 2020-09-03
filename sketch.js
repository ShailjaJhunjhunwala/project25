
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paddle,dustbinImg;
var gound;
var ball,paperImg;

function preload()
{
    //dustbinImg = loadImage("dustbingreen.png") 	
    //paperImg = loadImage("paper.png")
}

function setup() {
	createCanvas(800,600);
    rectMode(CENTER)
	engine = Engine.create();
	world = engine.world;

    paddle = new Dustbin(650,400,200,300)

	ground = Bodies.rectangle(width/2,height-40,width,20,{isStatic:true})
    World.add(world,ground)

    ball = new Ball(100,500,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rect(ground.position.x,ground.position.y,width,20)
  paddle.display();
  ball.display();
}

function keyPressed(){

	if(keyCode === 32){
        Matter.Body.applyForce(ball.image,ball.image.position,{x:75,y:-90})  
	}
}



