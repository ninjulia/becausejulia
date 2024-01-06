//toggle aria-expanded="true/false"
function toggleAria(target) {
	let ariaStatus = target.getAttribute('aria-expanded');
	if (ariaStatus === 'false') {
		target.setAttribute('aria-expanded', true);
	} else {
		target.setAttribute('aria-expanded', false);
	}
}

//Navbar Hamburger Menu @smaller screens
const toggleButton = document.querySelector('.btn-nav-fancy');
const toggleNav = document.querySelector(toggleButton.getAttribute('data-bs-target'));

toggleButton.addEventListener('click', () => {
	toggleAria(toggleButton);
	toggleNav.classList.toggle('show');
});

//Dropdown Menu @all screens
const ddToggle = document.querySelector('.dropdown-toggle');
const ddMenu = document.querySelector('.dropdown-menu');

ddToggle.addEventListener('click', () => {
	toggleAria(ddToggle);
	ddToggle.classList.toggle('show');
	ddMenu.classList.toggle('show');
});
