import './ninja-ui/styles/style.css';
import Tooltip from './ninja-ui/tooltip';
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';
// create tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdown
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
	const instance = new Dropdown(dropdown);
	instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
	snackbar.show('you clicked me', 2000);
});
