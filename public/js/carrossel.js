$(window).load(function () {
	if ($("#bk_slider.max4").length) {
		$("#bk_slider.max4").carouFredSel({
			responsive: true,
			auto: true,
			width: '100%',
			height: 322,
			items: {
				width: 420,
				height: "variable",
				visible: {
					min: 1,
					max: 6
				}
			},
			scroll: {
				easing: "swing", // swing, linear, quadratic, cubic, elastic
				fx: "directscroll", // none, scroll, directscroll, fade, crossfade, cover, cover-fade, uncover, uncover-fade
				duration: 1000,
            	items: 1
			},
			prev: {
				button: "#bk_ns",
				key: "left"
			},
			next: {
				button: "#bk_ps",
				key: "right"
			},
            //auto: {
            //  progress: ".timer5"
            //},
			pagination: ".is-smallslider-icons",
            // swipe: true
            //mousewheel: true,

        });
    }
});