jQuery(document).ready(function() {

	jQuery('.menu a, .hidden_menu a, .button_top').mPageScroll2id();

	jQuery('#testim').owlCarousel({
		items: 1,
		loop: true
	});
	jQuery('#clients').owlCarousel({
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			720: {
				items: 3
			},
			920: {
				items: 4
			},
			1200: {
				items: 5
			}
		}
	});

	var $container = jQuery(".masonry-container");
	jQuery('.item').imagefill();
	$container.imagesLoaded(function () {
		$container.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
		
	});

	jQuery(".toggle_menu").click(function() {
		jQuery(this).toggleClass("on");
		jQuery(".hidden_menu").slideToggle();
		return false;
	});

	jQuery('.services .item p').equalHeights();

	jQuery('.gallery .inside').magnificPopup({
		gallery: { enabled: true },
		type: 'image'
	});

});
