$(function () {

	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu__close');
	});
	$('.rightside-menu__close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu__close');
	});

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});

	if ($(window).width() < 651) {
		$('.works-path__item--measurements').appendTo($('.works-path__item-box'));
	}

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true,
	});

	$('.contact-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 10,
		slidesToScroll: 10,
	});

	$('.article__slider-box').slick({
		prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg"></button>',
		nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg"></button>'

	});

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});
})