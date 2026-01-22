$(document).ready(function(){
  $('.banner_slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    dotsClass: 'banner_sliderDots',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      },
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
  });
});