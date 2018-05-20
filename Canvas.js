class Canvas{
	constructor(){
		this.canvas        		 = document.getElementById("canvas");
		this.canvas.style.width  = window.innerWidth+"px";
		this.canvas.style.height = window.innerHeight+"px";

		this.context = this.canvas.getContext("2d");
		this.diff = null;
		this.last = null;
		this.tickRate = 1000.0/33.0;

		window.onresize =(e)=>{
			this.canvas.style.width = e.target.innerWidth+"px";
			this.canvas.style.height = e.target.innerHeight+"px";
		}

		this.init();

		return this.canvas;
	}

	init(){
		window.requestAnimationFrame((t)=>{this.run(t);});
	}

	run(t){
		if(!this.last){this.last = t;}
		this.diff = t-this.last;

		if(this.diff > this.tickRate){
			this.update(this.diff);
			this.last = t;
		}

		this.draw(this.context);
		window.requestAnimationFrame((t)=>{this.run(t);});
	}

	clear(c){
		c.clearRect(0,0,this.canvas.width,this.canvas.height);
		c.fillStyle = "rgb(0,0,0)";
		c.fillRect(0,0,this.canvas.width,this.canvas.height);
	}

	update(t){
	}

	draw(c){
		this.clear(c);
	}
}
