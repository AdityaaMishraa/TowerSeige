class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
      
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        // console.log(this.body.speed)
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
     
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y,this.width, this.height);
      pop();

      }
}