class Snow{

    constructor(x,y,r){
   var options={
       restitution:0.7
   }
   this.r=r;
   this.body=Bodies.circle(x,y,this.r,options);
   World.add(world,this.body);
   this.image=loadImage("snowball.png");
    }
   display(){
push();
    var pos=this.body.position;
   translate(pos.x,pos.y) ;
   rotate(this.body.angle);
   imageMode(CENTER);
   image(this.image,0,0,this.r,this.r);
pop();
}


}
