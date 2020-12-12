class Bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:7.8
			}
		this.x=x;
		this.y=y;
		this.body=Bodies.circle(this.x, this.y,30, options)
		World.add(world, this.body);

	}

	display(){
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);
			ellipseMode(RADIUS);
            fill(255,0,255);
			ellipse(0,0,30,30);
			pop();
			
	}

}