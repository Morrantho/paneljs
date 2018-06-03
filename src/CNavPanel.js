class CNavPanel extends CPanel{
	Init(parent,args){
		this.size.y = parent.size.y/12;
		this.size.x = parent.size.x;

		this.color.x = 128;
		this.color.y = 128;
		this.color.z = 128;
		this.color.w = 1;
		this.bg=this.color;

		let x = Gui.Create(CButton,this);
		x.position.x = this.size.x-x.size.x;

		let min = Gui.Create(CButton,this);
		min.position.x = x.position.x-min.size.x;

		let max = Gui.Create(CButton,this);
		max.position.x = min.position.x-max.size.x;
	}

	Click(x,y){
		this.lastPos = new CVector2(x,y);
	}

	Drag(x,y){
		let curPos = new CVector2(x,y);
		let distX = this.lastPos.DistanceX(curPos);
		let distY = this.lastPos.DistanceY(curPos);

		console.log(distX,distY);

		this.position.x += distX;
		this.position.y += distY;

		this.lastPos = new CVector2(x,y);
	}
}
Gui.Register(CNavPanel);