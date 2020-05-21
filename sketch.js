var block1, block2; 
var block3, block11; 
var block4, block5, block6, block7, block8, block9,block10; 
var roof1, roof2,roof3; 
var ground;
var door, door2; 
var window1, window2;

function setup() {
  createCanvas(800,400);
 

 block11=createSprite(400,130,150,100);


 block1=createSprite(200, 260, 80, 230); 
 block2=createSprite(600, 260, 80, 230);  
 
 
 block3=createSprite(400, 260, 320, 200);     
 door2=createSprite(400, 130, 40, 60);

 block4=createSprite(270, 150, 20, 20);
 block5=createSprite(320, 150, 20, 20);
 block6=createSprite(370, 150, 20, 20); 
 block7=createSprite(420, 150, 20, 20); 
 block8=createSprite(470, 150, 20, 20); 
 block9=createSprite(520, 150, 20, 20);

 block12=createSprite(335, 70, 20, 20); 
 block13=createSprite(378, 70, 20, 20);
 block14=createSprite(422, 70, 20, 20);
 block15=createSprite(465, 70, 20, 20);

 ground=createSprite(400,400,800,80 );
 door=createSprite(400,315,70,90);

 window1=createSprite(200,170,35,50); 
 window2=createSprite(600,170,35,50); 

  

}

function draw() {
  
  block1.shapeColor=("brown");  
  block2.shapeColor=("brown");
  block3.shapeColor=("yellow");
  ground.shapeColor=("green"); 
  //roof1.shapeColor=("white");  
  block11.shapeColor=("yellow");  
  //ROOF2.shapeColor=("red");  
  door.shapeColor=("brown"); 
  door2.shapeColor=("brown");  
  //.shapeColor("red");
  window1.shapeColor=("cyan"); 
  window2.shapeColor=("cyan");

  ROOF1();  
  ROOF2();

  drawSprites();
} 


function ROOF1() { 
  roof1=beginShape(TRIANGLES); 
  vertex(150,145); 
  vertex(250,145); 
  vertex(200,50); 
  endShape();  
 
} 


function ROOF2() { 
  roof2=beginShape(TRIANGLES); 
  vertex(550,145); 
  vertex(650,145); 
  vertex(600,50); 
  vertex(200,20); 
  endShape();  
 
} 