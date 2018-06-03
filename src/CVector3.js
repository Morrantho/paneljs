class CVector3 extends CVector2{
	constructor(x=0,y=0,z=0){
		super(x,y);
		this.z=z;
	}
	Add(vec){
		super.Add(vec);
		this.z += vec.z;
	}
	Subtract(vec){
		super.Subtract(vec);
		this.z -= vec.z;
	}
	Multiply(vec){
		super.Multiply(vec);
		this.z *= vec.z;
	}
	Divide(vec){
		super.Divide(vec);
		this.z /= vec.z;
	}
}