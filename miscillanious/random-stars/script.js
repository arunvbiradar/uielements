const w = window.innerWidth;
const h = window.innerHeight;


function generate(n) {
	
	for (var i = 0; i < n; i++) {
		let spn = document.getElementsByClassName('stars');		
		spn[0].style.display = 'none';
		spn = spn[0].cloneNode(true);
		spn.classList.add((i % 2 == 0) ? 'fa-2x' : i % 3 == 0 ? 'fa-3x' : 'fa-1x');
		spn.setAttribute('style', `top: ${Math.round(Math.random()*h)}px;left: ${Math.round(Math.random()*w)}px`);
		document.body.appendChild(spn);
	}
}
generate(50);