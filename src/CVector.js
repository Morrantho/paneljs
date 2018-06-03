class CVector extends CBaseVector{
	constructor(x=0){
		super(x);
	}
	Add(vec){
		this.x += vec.x;
	}
	Subtract(vec){
		this.x -= vec.x;
	}
	Multiply(vec){
		this.x *= vec.x;
	}
	Divide(vec){
		this.x /= vec.x;
	}
}