

var supply;
var helicopter;

function preload(){

	
}

function setup(){
    var canvas = createCanvas(400,400);
   helicopter=createSprite(350,200,50,20);
   helicopter.velocityX=2;
  
 

 

}
   function draw(){
    background(0);
   

    rectMode(CENTER);
    background(0);
   
  helicopter.display();

  Matter.Bodies.circle(350,350, circle, [options], [30]) 

  ellipse(56, 46, 55, 55);
    drawSprites();
   
  }
