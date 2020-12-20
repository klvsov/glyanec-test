$('.slider').on(
  'init reInit afterChange',
  function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.slide-counter').html(`<span>0${i}</span>/0${slick.slideCount}`);
    $('.new-product').css('background-image', `url(../images/new-${i}.jpg)`);
  }
);

$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
});

$('.features-wrap').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
});
