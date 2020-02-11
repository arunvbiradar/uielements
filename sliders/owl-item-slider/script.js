$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
	items: 5,
	center: true,
	navText: ["&#x2190;", "&#x2192;"],
	responsive : {
		0 : {
			items: 1,
		},
		480 : {
			items: 2,
		},
		768 : {
			items: 4,
		},
		992 : {
			items: 5,
		}
	}
})