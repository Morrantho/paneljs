class CButton extends CPanel{

	Init(parent,args){
		this.text = "X";

		this.size.x = parent.size.y;
		this.size.y = parent.size.y;

		this.color.w = 1;

		this.bg.x=128;
		this.bg.y=128;
		this.bg.z=128;
		this.bg.w=1;
	}

	SetText(text){
		this.text=text;
	}
	GetText(){
		return this.text;
	}

	Tick(t){
		if(this.isHovered){
			this.color.x=240;
			this.color.y=52;
			this.color.z=52;
		}else{
			this.color.x=32;
			this.color.y=32;
			this.color.z=32;
		}
		this.color.w=1;
	}

	Render(c){
		super.Render(c);

		c.font="16px Arial";
		c.fillStyle="rgb(255,255,255)";
		c.fillText(this.text,this.position.x+this.size.x/3,this.position.y+this.size.y/1.5);
	}
}
Gui.Register(CButton);