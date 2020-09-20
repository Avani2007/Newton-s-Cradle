class Rope{
    constructor(bodyA,pointB){

        var options ={
            bodyA:bodyA,
            pointB:pointB,    
    }
this.pointB=pointB
    this.rope = Constraint.create(options)
    World.add(world,this.rope)
}
display(){ 
    var pointA = this.rope.bodyA.position
    var pointB = this.pointB
    stroke("blue")
    strokeWeight (8)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
}
}