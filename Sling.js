class Sling {
constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.5,
        length: 300,
    }
    this.pointB = pointB;
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot);
}

display(){
    if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointB.x, pointB.y, pointA.x, pointA.y);

    }
    
}

}