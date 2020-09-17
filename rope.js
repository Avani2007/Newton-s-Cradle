class Rope{
    constructor(body1,pointB,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY;

        var options ={
            bodyA:body1,    
            point:{x:this.offsetX,y:this.offsetY}
    }

    this.chain = Constraint.create(options)
    World.add(world,this.chain)
}
display(){ 
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position
    push()
    stroke("blue")
    strokeWeight (8)
    line (pointA.x,pointA.y,pointB.x,pointB.y)
    pop()
}
}