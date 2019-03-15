var menuButt = document.getElementById('menuButton');

menuButt.addEventListener('click', function() {
	var y = document.getElementById('navBar');
	if (y.className === 'navi') {
		y.className += 'topNav';
	} else {
		y.className = 'navi';
	}
})