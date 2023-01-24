$(function () {
  $(".about__link").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
  $(".gallery__slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-left.svg" alt="arrow"/></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="img/arrow-right.svg" alt="arrow"/></button>',
  });
  $(".menu__btn").on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });
});
