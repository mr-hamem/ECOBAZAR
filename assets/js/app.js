$(document).ready(function(){
  $('.banner_slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000000,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    dots: true,
    dotsClass: 'banner_sliderDots',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
        slidesToScroll: 1,
        dots: false
      },
    }
  ]
  });
  $('.featureSlider').slick({
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
        slidesToShow: 2,
        slidesToScroll: 1
      },
    }
  ]
  })
});