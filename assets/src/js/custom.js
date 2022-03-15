jQuery(document).ready(function ($) {

	$('.search-mobile-link').click(function () {
		$('.search-form').toggle(300);
	});

    $(function() {
        $('.product-card__img').matchHeight();
		$('.product-card h6').matchHeight();
		$('.block__product-img img').matchHeight();
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

	//view more	
	jQuery('.sitebar-filter__item ul').each(function() {
		let el = jQuery(this);

		el.find('li')
		.filter(function( index ) {
			return (index > 5) ;
		})
			.hide();

	});

	jQuery('.view-more').click(function() {		 
		let btn = jQuery(this);
		let el = btn.prev();
		btn.toggleClass('open');
		el.each(function() {
	
		el.find('li')
		.filter(function( index ) {
			return (index > 5 ) ;
		})
			.slideToggle();  

		});
	});
	jQuery('#accordionFlushExample').each(function() {
		let el = jQuery(this);

		el.find('.accordion-item')
		.filter(function( index ) {
			return (index > 5) ;
		})
			.hide();

	});
	jQuery('.view-more-cat').click(function() {		 
		let btn = jQuery(this);
		let el = btn.prev();
		btn.toggleClass('open');
		el.each(function() {
	
		el.find('.accordion-item')
		.filter(function( index ) {
			return (index > 5 ) ;
		})
			.slideToggle();  

		});
	});

});
