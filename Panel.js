class Panel extends Entity{
	constructor(){
		super();
		this.children = [];
		this.w = 256;
		this.h = 256;
		this.visible = true;
		this.color="rgb(64,64,64)";
	}

	add(cls){
		let elem = EntityManager.create(cls);
		this.children.push(elem);
	}

	show(){
		this.visible = true;
		this.children.map(e=>e.visible=true);
	}

	hide(){
		this.visible = false;
		this.children.map(e=>e.visible=false);
	}
}
