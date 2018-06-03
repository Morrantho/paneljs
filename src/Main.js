window.onload=()=>{
	let canvas = document.createElement("canvas");
	let context = canvas.getContext("2d");
	document.body.appendChild(canvas);

	function Tick(t){
		Gui.GetPanels().map(pnl=>pnl.__Tick__(t));
	}

	function Render(context){
		canvas.width=window.innerWidth;
		canvas.height=window.innerHeight;
		canvas.style.width=canvas.width+"px";
		canvas.style.height=canvas.height+"px";
		context.fillStyle="rgb(127,127,127)";
		context.fillRect(0,0,canvas.width,canvas.height);

		Gui.GetPanels().map(pnl=>pnl.__Render__(context));
	}

	function Run(t){
		Tick(t);
		Render(context);
		window.requestAnimationFrame(Run);
	}
	window.requestAnimationFrame(Run);

	let pnl = Gui.Create(CNavPanel);
	// console.log(Gui.GetPanels());
}