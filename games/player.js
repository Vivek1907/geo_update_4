class Character{
    constructor(x,y,width,height){
        this.image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 10;
    }
    display(){
        push();
        animate(run,runData,200,200,1);
        this.y+=5;
        this.y = constrain(this.y,0,displayHeight-300);
        rectMode(CENTER);
        rect(xpos,this.y+this.height*0.5,this.width*0.5,this.height);
        pop();
    }
}