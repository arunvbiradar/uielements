window.addEventListener('load', function(){
	const cards = document.querySelectorAll('[card-render]');
	cards.forEach(function(item) {
		let ht = item.offsetHeight;
		item.style.height = ht+'px';
	});
});