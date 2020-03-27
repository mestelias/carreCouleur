window.addEventListener("load", event => main());

const main = () => {
	let model = new MyModel();
	let view = new MyView(document.body);
	let controller = new MyController();

	const mvc = new MVC(model, view, controller);
};