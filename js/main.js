$(document).ready(function() {
	$(".list").click(function() {
		$(".open-list").slideToggle("fast");
		$(this).find("span").toggleClass("active-list"); return false;
	});

	$(".main-menu").click(function() {
		$("#menuUp").slideToggle("fast");
		$(this).toggleClass("active-main-menu"); return false;
	});

	var glide = $('.slider').glide().data('api_glide');

	$(window).on('keyup', function (key) {
		if (key.keyCode === 13) {
			glide.jump(3, console.log('Wooo!'));
		};
	});

	$('.slider-arrow').on('click', function() {
		console.log(glide.current());
	});
});