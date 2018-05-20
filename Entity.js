class Entity{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.w = 64;
		this.h = 64;
		this.color = "rgba(255,255,255,1)";
	}

	update(t){

	}

	draw(c){
		c.fillStyle = this.color;
		c.fillRect(this.x,this.y,this.w,this.h);
	}

	intersects(ent){
		return this.x < ent.x+ent.w &&
		ent.x < this.x+this.w &&
		this.y < ent.y+ent.h &&
		ent.y < this.y+this.h;
	}

	collide(ent){

	}
}
