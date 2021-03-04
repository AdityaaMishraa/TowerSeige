class Ground{

    constructor(x, y, width, height){
        var options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x, y, width, height, options);
          World.add(world,this.ground);
		  this.w=width;
		  this.h=height;
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
    }
}