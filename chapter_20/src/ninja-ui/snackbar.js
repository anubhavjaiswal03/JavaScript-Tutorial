import './styles/snackbar.css';

class Snackbar {
	constructor() {
		this.snackbar = document.createElement('div');
	}
	init() {
		this.snackbar.classList.add('snackbar');
		document.querySelector('body').appendChild(this.snackbar);
	}
	show(message, time = 4000) {
		this.snackbar.textContent = message;
		this.snackbar.classList.add('active');
		setTimeout(() => {
			this.snackbar.classList.remove('active');
		}, time);
	}
}
export { Snackbar as default };
