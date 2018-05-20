let entities = [];
let classes  = {
	"Entity":Entity,
	"Panel":Panel,
	"Button":Button,
};

const EntityManager = {
	mouseX:0,
	mouseY:0,

	create:function(cls){
		if(classes[cls]){
			let ent = new classes[cls]();
			ent.id = entities.length;
			ent.class = cls;
			entities.push(ent);
			return ent;
		}
		return undefined;
	},

	getEntities:function(){
		return entities;
	},

	getClasses:function(){
		return classes;
	},

	findById:function(id){
		return entities.filter(e=>e.id==id)[0];
	},

	findByClass(cls){
		return entities.filter(e=>e.class==cls);
	},

	collide:function(ent){
		let collisions = entities.filter(e=>ent.intersects(e)&&e.intersects(ent)&&ent!=e);
		collisions.map(e=>e.collide(ent)&&ent.collide(e));
	},

	update:function(t){
		entities.map(e=>{e.update(t); this.collide(e);});
	},

	draw:function(c){
		entities.map(e=>e.draw(c));
	},
};

window.onmousemove=(e)=>{
	EntityManager.mouseX = e.clientX;
	EntityManager.mouseY = e.clientY;
}
window.onmousedown=(e)=>{
	EntityManager.mouseDown = true;
}
window.onmouseup=(e)=>{
	EntityManager.mouseDown = false;
}
