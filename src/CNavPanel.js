class CNavPanel extends CPanel{
	Init(parent,args){
		this.size.x = 512;
		this.size.y = 32;

		this.color.x = 64;
		this.color.y = 64;
		this.color.z = 64;
		this.color.w = 1;

		this.bg.x=32;
		this.bg.y=32;
		this.bg.z=32;
		this.bg.w=32;

		let x = Gui.Create(CButton,this);
		x.position.x = this.size.x-x.size.x;

		let max = Gui.Create(CButton,this);
		max.position.x = x.position.x-max.size.x+1;
		max.SetText("[ ]");

		let min = Gui.Create(CButton,this);
		min.position.x = max.position.x-min.size.x+1;
		min.SetText("_");

		let pnl = Gui.Create(CPanel,this);
		pnl.size.x = this.size.x;
		pnl.size.y = this.size.y*12;
		pnl.position.x = 0;
		pnl.position.y = this.position.y+this.size.y-1;
	}

	Click(){

	}

	Drag(x,y){
		for(let child in this.children){
			if(this.children[child].isHovered){return false;}
		}

		this.position.x = x;
		this.position.y = y;
		document.body.style.cursor="move";
	}

	Drop(){
		document.body.style.cursor="default";
	}
}
Gui.Register(CNavPanel);
