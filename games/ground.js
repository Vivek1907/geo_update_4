class Ground{
    constructor(x,y){
     var options = {
       isStatic: true,
     }
     this.x = x;
     this.y = y;
     this.body = Bodies.rectangle(this.x,this.y,displayWidth*4,60,options);
     World.add(world,this.body);
    }
    display(){
      fill(255);
      imageMode(CENTER);
      image(groundImg,0,this.body.position.y,displayWidth*5,200);
    }
}