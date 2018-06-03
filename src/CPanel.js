class CPanel extends CBasePanel{
	constructor(){
		super();
	}

	Init(parent,args){
		this.size.x=window.innerWidth/3;
		this.size.y=window.innerHeight/2;

		this.color.x=64;
		this.color.y=64;
		this.color.z=64;
		this.color.w=1;

		this.bg.x=128;
		this.bg.y=128;
		this.bg.z=128;
		this.bg.w=1;

		this.isHovered=false;
		this.isClicked=false;
		this.isDragging=false;

		Gui.Create(CNavPanel,this);
	}
	Click(x,y){}
	Hover(){}
	Drag(){}
	Drop(){}

	__Click__(){
		if( this.isHovered && Gui.GetMouseClick() ){
			if(!this.isClicked){
				let mouse = Gui.GetMouse();
				this.Click(mouse.x,mouse.y);
			}
			this.isClicked=true;
		}else{
			this.isClicked=false;
		}
	}

	__Hover__(){
		let mouse = Gui.GetMouse();

		if(this.position.x < mouse.x
			&& mouse.x < this.position.x+this.size.x
			&& this.position.y < mouse.y
			&& mouse.y < this.position.y+this.size.y
		){
			this.Hover();
			this.isHovered=true;
		}else{
			this.isHovered=false;
		}
	}

	__Drag__(){
		if(this.isClicked){
			let mouse = Gui.GetMouse();
			this.Drag(mouse.x,mouse.y); // Passes mouse pos.
			this.isDragging=true;
		}else{
			this.__Drop__();
			this.isDragging=false;
		}
	}

	__Drop__(){
		this.Drop();
	}

	Tick(t){

	}

	Render(c){
		c.fillStyle="rgba("+this.bg.x+","+this.bg.y+","+this.bg.z+","+this.bg.w+")";
		c.fillRect(this.position.x,this.position.y,this.size.x,this.size.y);		
		c.fillStyle="rgba("+this.color.x+","+this.color.y+","+this.color.z+","+this.color.w+")";
		c.fillRect(this.position.x+1,this.position.y+1,this.size.x-2,this.size.y-2);
	}
}
Gui.Register(CPanel);