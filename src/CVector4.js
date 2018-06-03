class CVector4 extends CVector3{
	constructor(x=0,y=0,z=0,w=0){
		super(x,y,z);
		this.w=w;
	}

	Add(vec){
		super.Add(vec);
		this.w += vec.w;
	}

	Subtract(vec){
		super.Subtract(vec);
		this.w -= vec.w;
	}

	Multiply(vec){
		super.Multiply(vec);
		this.w *= vec.w;
	}

	Divide(vec){
		super.Divide(vec);
		this.w /= vec.w;
	}
}