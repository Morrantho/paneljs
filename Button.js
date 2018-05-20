class Button extends Entity{
	constructor(){
		super();
		this.w=32;
		this.h=32;
		this.hovered=false;
		this.color="";
	}

	mouseIntersects(){
		return this.x < EntityManager.mouseX &&
		EntityManager.mouseX < this.x+this.w &&
		this.y < EntityManager.mouseY &&
		EntityManager.mouseY < this.y+this.h;
	}

	onClick(){
		if(EntityManager.mouseDown && this.mouseIntersects()){
			this.click();
			EntityManager.mouseDown = false;
		}
	}

	click(){
		console.log("CLICKED:",this);
	}

	update(t){
		if(this.mouseIntersects()){
			this.hovered=true;
		}else{
			this.hovered=false;
		}

		this.onClick();
	}

	draw(c){
		if(this.hovered){
			this.color = "rgba(0,255,0,1)";
		}else{
			this.color = "rgba(255,0,0,1)";
		}

		super.draw(c);
	}
}
