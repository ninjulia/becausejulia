// display loading sequence while waiting for deferred js
const loadingDots = document.getElementById('loadingDots');
const imageSet = document.querySelectorAll('.grid-img');
const viewMore = document.getElementById('viewMore');
const error = `An error occurred. <a href='https://dribbble.com/becausejulia' name='latest_work' rel='noreferrer' title='dribbble' class="text-white">View the latest images</a> by BecauseJulia on Dribbble.`;
let dotInterval = '',
	counter = 0;
//add "..." while waiting for load
function loadingFunction() {
	dotInterval = setInterval(function () {
		loadingDots.innerText = '.'.repeat(counter % 4);
		counter++;
	}, 1000);
}
//display loading indicator until images ready
loadingFunction();
//stop loading function if an error occurs
window.onerror = function (e) {
	clearInterval(dotInterval);
	viewMore.innerHTML = error;
	imageSet.forEach((image) => image.parentNode.classList.add('transparent'));
	console.error(e);
};
