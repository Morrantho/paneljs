class CVector2 extends CVector{
	constructor(x=0,y=0){
		super(x);
		this.y=y;
	}
	Add(vec){
		super.Add(vec);
		this.y += vec.y;
		return this;
	}
	Subtract(vec){
		super.Subtract(vec);
		this.y -= vec.y;
		return this;
	}
	Multiply(vec){
		super.Multiply(vec);
		this.y *= vec.y;
		return this;
	}
	Divide(vec){
		super.Divide(vec);
		this.y /= vec.y;
		return this;
	}
	Distance(vec){
		return ((vec.x-this.x)^2+(vec.y-this.y)^2)^0.5;
	}
	DistanceX(vec){
		return ((vec.x-this.x)^2)^0.5;
	}	
	DistanceY(vec){
		return ((vec.y-this.y)^2)^0.5;
	}
	Dot(vec){
		return this.x*vec.x+this.y*vec.y;
	}
}