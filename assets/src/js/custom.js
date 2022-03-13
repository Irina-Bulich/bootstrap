jQuery(document).ready(function ($) {

	$('.search-mobile-link').click(function () {
		$('.search-form').toggle(300);
	});

	// $(function () {
	// 	let windowWidth = $(window).width();
	// 	if (windowWidth > 980) {
	// 		$('#main-menu .dropdown').hover(function () {
	// 			$(this).addClass('show');
	// 			$(this).find('.dropdown-menu').addClass('show');
	// 		},
	// 			function () {
	// 				$(this).removeClass('show');
	// 				$(this).find('.dropdown-menu').removeClass('show');
	// 			});
	// 	}
	// });




	// $('ul.nav').find('li.big-menu-menu-item a').click(function () {
	// 	$(this).parent().toggleClass('show-menu-on-click');
	// });
	// $(window).scroll(function () {
	// 	var scroll = $(window).scrollTop();
	// 	if (scroll >= 40) {
	// 		$("#main-header").addClass("et-fixed-header");
	// 	} else {
	// 		$("#main-header").removeClass("et-fixed-header");
	// 	}
	// });

	// // For section on home page #section-home-what-are-you-looking-for
	// $('#section-home-what-are-you-looking-for .et_pb_blurb_content').each(function () {
	// 	$(this).find('h4').appendTo($(this).find('.et_pb_main_blurb_image'))
	// });

	// // for tabs on home page. Tabs on hover
	// // $('.et_pb_tabs.lets-catch-tabs ul.et_pb_tabs_controls > li').on('mouseenter, mousemove', function (e) {
	// // 	$(this).find('> a').not('.et_pb_tab_active').click();
	// // });

	// // .testimonials-carousel
	// $('.testimonials-carousel').owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	autoplay: true,
	// 	dots: false,
	// 	nav: true,
	// 	navText: ["<img src='/wp-content/uploads/2020/07/nav-carousel-left.png' alt='Left' />", "<img src='/wp-content/uploads/2020/07/nav-carousel-right.png' alt='Right' />"],

	// });
    $(function() {
        $('.product-card__img').matchHeight();
		$('.product-card h6').matchHeight();
    });

    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });

});
