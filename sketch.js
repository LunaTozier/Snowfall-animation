const Bodies= Matter.Bodies;
const World = Matter.World;
const Engine= Matter.Engine;

var bg, bgImg
var p1, p2, p3 ,p4;
var p1Img, p2Img, p3Img, p4Img;
var snowBall
var snow=[];
var engine 
var world

function preload(){
  bgImg = loadImage("snow1.jpg")
  p1Img = loadImage("penguin1.png")
  p2Img = loadImage("penguin2.png")
  p3Img = loadImage("penguin3.png")
  p4Img = loadImage("penguin4.png")
}
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  


  p1 = createSprite(140,700,70,70)
  p1.addImage("penguin1", p1Img)
  p1.scale = 0.4;
  p2 = createSprite(400,680,70,70)
  p2.addImage("penguin2", p2Img)
  p3 = createSprite(700,700,70,70)
  p3.addImage("penguin3", p3Img)
  p3.scale = 0.5;
  p4 = createSprite(950,700,70,70)
  p4.addImage("penguin4", p4Img)
  p4.scale = 0.4;

}
 

function draw() {
  background(bgImg); 
  
  Engine.update(engine);

  if(frameCount % 7==0){
    snow.push(new Snow(random(0,1200),-20,30));
  }
for(var i=0;i<snow.length;i++){
  snow [i].display();
}
  drawSprites();
}