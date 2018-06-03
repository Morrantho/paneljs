let ctors = {};
let panels = [];
let id = 0;
let mouse=new CVector2();
let mouseDown=false;

const Gui = {
	Register:(clazz)=>{
		ctors[clazz.name] = clazz;
	},

	Create:(clazz,parent,...args)=>{
		let pnl = new ctors[clazz.name]();
		pnl.Init(parent,args);
		pnl.id=id++;

		if(!parent){ // Global Panels.
			panels[pnl.id]=pnl;
		}else{ // Add to parent panels / children.
			parent.Add(pnl);
			pnl.SetParent(parent);
		}
		return pnl;
	},

	GetPanels:()=>{
		return panels;
	},

	GetMouse:()=>{
		return mouse;
	},

	GetMouseClick:()=>{
		return mouseDown;
	}
};
window.onmousemove=(e)=>{mouse.x=e.clientX;mouse.y=e.clientY;}
window.onmousedown=(e)=>{mouseDown=true;}
window.onmouseup=(e)=>{mouseDown=false;}
