class Rope{
    constructor(body1, body2, offsetX, offsetY){ //constructor takes two bodies that the chain should connect
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1, //assign bodyA to bodyA
            bodyB: body2, //assign bodyB to bodyB
            pointB: {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options); //create chain using Constraint
        World.add(world1, this.rope); //adding the chain into the world
    }
    display(){
        var pointA = this.rope.bodyA.position; //take the position of bodyA as pointA
        var pointB = this.rope.bodyB.position; //take the position of bodyB as pointB
        var anchor1x = pointA.x;
        var anchor1y = pointA.y;
        var anchor2x = pointB.x + this.offsetX;
        var anchor2y = pointB.y + this.offsetY;
        line(anchor1x,anchor1y,anchor2x,anchor2y); // draw a line between pointA and pointB

    }
}