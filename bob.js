class Bob{
    constructor(x, y,r) {
        var options = {
            isStatic:false,
            'restitution':10,
            'friction':0.8,
            'density':1.8
        }
        this.x=x;
        this.y=y;
         this.r=r;
          this.body=Bodies.circle(this.x, this.y, this.r/2, options)
          World.add(world, this.body);
      }
      display(){
        var paperpos=this.body.position;
         push()
          translate(paperpos.x, paperpos.y);
           rectMode(CENTER) 
           strokeWeight(3);
            fill("pink")
         ellipse(0,0,this.r, this.r);
          pop()
      }
}