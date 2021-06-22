class Box{
    constructor(x,y,w,h){
        let options={
            friction:0.3,
            restitution:0.6,
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w=w;
        this.h=h;
    }
    show(){
        stroke ("red");
        rect(this.body.position.x,this.body.position.y,100,50);
    }

}