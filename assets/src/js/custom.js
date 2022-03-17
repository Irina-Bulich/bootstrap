jQuery(document).ready(function ($) {

	$('.search-mobile-link').click(function () {
		$('.search-form').toggle(300);
	});
	function scroll_header() {
		if($('#filter-block').length > 0 ) {
			$(window).scroll(function() {
				var height = $(window).scrollTop();
				if(height > 50){
				$('body').addClass('body-scroll');
				} else{
				$('body').removeClass('body-scroll');
				}
			});
		}
	}
	if ($(window).width() <= '980'){
		scroll_header();
	}
	$(window).resize(function() {
		if ($(window).width() <= '980'){
			scroll_header();
		}
	});
	
	$(function () {
		$('.product-card__img').matchHeight();
		$('.product-card h6').matchHeight();
		$('.block__product-img img').matchHeight();
		$('.home-cats-item').matchHeight();
		$('.industries-serve__item').matchHeight();
		$('.stock-shipping-info-item').matchHeight();
		$('.product__accessories-item').matchHeight();
		$('.favorites-products .product-card__img').matchHeight();
		$('.favorites-products h6').matchHeight();
		$('.section-compare__item').matchHeight();
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

	// Quantity count on single product
	$('.product__quantity .button-plus').click(function add() {
		var $qty = $(".product__quantity .quantity-field");
		var a = $qty.val();
		a++;
		$(".product__quantity .button-minus").prop("disabled", !a);
		$qty.val(a);
	});
	$(".product__quantity .button-minus").prop("disabled", !$(".product__quantity .quantity-field").val());
	$('.product__quantity .button-minus').click(function subst() {
		var $qty = $(".product__quantity .quantity-field");
		var b = $qty.val();
		if (b >= 1) {
			b--;
			$qty.val(b);
		}
		else {
			$(".product__quantity .button-minus").prop("disabled", true);
		}
	});

	// Run Tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})
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




// mobile nav menu
(function ($bs) {
	const CLASS_NAME = 'has-child-dropdown-show';
	$bs.Dropdown.prototype.toggle = function (_orginal) {
		return function () {
			document.querySelectorAll('.' + CLASS_NAME).forEach(function (e) {
				e.classList.remove(CLASS_NAME);
			});
			let dd = this._element.closest('.dropdown').parentNode.closest('.dropdown');
			for (; dd && dd !== document; dd = dd.parentNode.closest('.dropdown')) {
				dd.classList.add(CLASS_NAME);
			}
			return _orginal.call(this);
		}
	}($bs.Dropdown.prototype.toggle);

	document.querySelectorAll('.dropdown').forEach(function (dd) {
		dd.addEventListener('hide.bs.dropdown', function (e) {
			if (this.classList.contains(CLASS_NAME)) {
				this.classList.remove(CLASS_NAME);
				e.preventDefault();
			}
			if (e.clickEvent && e.clickEvent.composedPath().some(el => el.classList && el.classList.contains('dropdown-toggle'))) {
				e.preventDefault();
			}
			e.stopPropagation(); // do not need pop in multi level mode
		});
	});
})(bootstrap);
