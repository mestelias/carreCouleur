class MVC {
	
	constructor(model, view, controller) {
		console.log("new MVC");

		this.model = model;
		this.view = view;
		this.controller = controller;

		this.model.view = view;
		this.model.controller = controller;

		this.view.model = model;
		this.view.controller = controller;

		this.controller.model = model;
		this.controller.view = view;

		this.model.initialize();
		this.view.initialize();
		this.controller.initialize();
	}
}

class Model {
	constructor() {
		console.log("new model");
		this.view = null;
		this.controller = null;
	}

	initialize() {
		console.log("init model");
	}
}

class View {
	constructor(element) {
		console.log("new view");
		this.wrapper = element;

		this.model = null;
		this.controller = null;
	}

	initialize() {
		console.log("init view");
	}
}

class Controller {

	constructor() {
		console.log("new controller");
		this.model = null;
		this.view = null;
	}

	initialize() {
		console.log("init controller");
	}
}

class MyModel extends Model {

	constructor(element) {
		super();
	}

	data() {
		return ["#000000", "#FF0000", "#00FF00", "#0000FF"];
	}

	random() {
		return "a" + Math.random().toString(16).substr(-6);
	}
}

class MyView extends View {
	constructor(element) {
		super(element);
	}

	draw(data) {
		data.forEach(color => {
			let square = document.createElement("div");
			square.classList.add("square");
			this.wrapper.appendChild(square);
			square.stylebackgroundColor = color;
			square.addEventListener("click", event => this.controller.elementClick(event.target));
		});
	}

	refresh(square, color) {
		square.style.backgroundColor = color;
	}
}

class MyRoundView extends View {
	constructor(element) {
		super(element);
	}

	draw(data) {
		data.forEach(color => {
			let square = document.createElement("div");
			square.classList.add("square");
			this.wrapper.appendChild(square);
			square.style.backgroundColor = color;
			square.style.borderRadius = "50px";
			square.addEventListener("click", event => this.controller.squareClick(event.target));
		});
	}
} 

class MyController extends Controller {

	constructor(element) {
		super();
	}

	initialize() {
		super.initialize();

		this.view.draw(this.model.data());
	}

	squareClick(square) {
		this.view.refresh(square, this.model.random());
	}
}