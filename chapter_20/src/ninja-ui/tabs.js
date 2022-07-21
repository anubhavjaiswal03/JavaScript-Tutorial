import './styles/tabs.css';
class Tabs {
	constructor(container) {
		this.container = container;
		this.tabs = Array.from(container.querySelectorAll('.trigger'));
	}
	init() {
		// setting up a single listner for the entire tab dom which fires the toggleTabs function only when it a trigger element is clicked
		this.container.addEventListener('click', (e) => {
			// all tabs must have a class of 'trigger'
			if (e.target.classList.contains('trigger')) {
				// sending the tab which was clicked on
				this.toggleTabs(e.target);
				this.toggleContent(e.target);
			}
		});
	}
	toggleTabs(tab) {
		// check if there is an active class
		if (this.container.querySelector('.trigger.active')) {
			//removing active class from the active tab
			this.container
				.querySelector('.trigger.active')
				.classList.toggle('active');
		}

		//adding active class to the selected tab
		tab.classList.toggle('active');
	}
	toggleContent(target) {
		// check if there is an active class
		if (this.container.querySelector('.content.active')) {
			//removing active class from the active content
			this.container
				.querySelector('.content.active')
				.classList.toggle('active');
		}
		//adding active class to the selected content
		this.container
			.querySelector(target.getAttribute('data-target'))
			.classList.toggle('active');
	}
}
export { Tabs as default };
