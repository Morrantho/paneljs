class CBasePanel{
	constructor(size=new CVector2(),position=new CVector2(),color=new CVector4()){
		this.size=size;
		this.position=position;
		this.color=color;
		this.bg=new CVector4();
		this.children=[];
		this.parent=null;
	}

	SetX(x){this.position.x=x;}
	GetX(){return this.position.x;}
	SetY(y){this.position.y=y;}
	GetY(){return this.position.y;}
	SetPos(x,y){this.position.x=x;this.position.y=y;}
	GetPos(){return this.position;}

	SetW(w){this.size.x=w;}
	GetW(){return this.size.x;}
	SetH(h){this.size.y=h;}
	GetH(){return this.size.y;}
	SetSize(w,h){this.size.x=w;this.size.y=h;}
	GetSize(){return this.size;}

	SetColor(r,g,b,a){this.color.x=r;this.color.y=g;this.color.z=b;this.color.w=a;}
	GetColor(){return this.color;}

	SetParent(parent){this.parent=parent;}
	GetParent(){return this.parent;}

	GetChildren(){return this.children;}

	Init(){}
	Add(pnl){
		this.children.push(pnl);
	}
	Tick(t){}
	Render(context){}

	__Init__(){this.Init();}
	__Click__(){}
	__Unclick__(){}
	__Hover__(){}
	__Unhover__(){}
	__Drag__(){}
	__Drop__(){}
	// Template Method. Don't Overwrite. Subclasses hook into these methods.
	__Tick__(t){
		if(this.xOff == undefined){
			this.xOff = this.position.x;
			this.yOff = this.position.y;
		}

		if(this.lastPos == undefined){
			this.lastPos = this.position;
		}

		if(this.parent){ // If we have a parent, we're a child.
			this.position.x = this.parent.position.x+this.xOff;
			this.position.y = this.parent.position.y+this.yOff;
		}

		this.Tick(t);
		this.__Click__();
		this.__Unclick__();
		this.__Hover__();
		this.__Unhover__();
		this.__Drag__(); // __Drop__() gets called in __Drag__();

		this.children.map(child=>child.__Tick__(t));
	}

	__Render__(context){
		this.Render(context);
		this.children.map(child=>child.__Render__(context));
	}
}
