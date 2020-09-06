class log{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution':0.8,
            'friction':3.0,
            'density':1.0,
        }
    this.log = Bodies.rectangle(x,y,width,height,options);
    this.width = width
    this.height = height
    Matter.Body.setAngle(this.log,angle);
    World.add(world, this.log);
}
display(){
  var pos =this.log.position;
  var angle = this.log.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(4);
  stroke("lightbrown")
  fill("brown");
  rect(0, 0, this.width, this.height);
  pop();
}
}