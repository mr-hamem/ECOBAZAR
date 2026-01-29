$(document).ready(function () {
  // banner slider slick js starts here
  $('.banner_slider').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
  // banner slider slick js ends here
  // feature section slick slider js starts here
  $('.featureSlider').slick({
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      }
    ]
  });
  // feature section slick slider js ends here
  // top category section slick slider starts here
  $('.top_cat_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('.leftArrow'),
    nextArrow: $('.rightArrow'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      }
    ]
  });
  // top category section slick slider ends here
  // countdown jquery file starts here
  $('#cot_sale_timer').countdown('2026/04/30', function(event) {
  var $this = $(this).html(event.strftime(''
    +
    '<div class="cot_sale_timer_para"><span class="span_1">%D</span><span class="span_2">Days</span></div> ' +
    '<span class="colon_sign">:</span>'+
    '<div class="cot_sale_timer_para"><span class="span_1">%H</span><span class="span_2">Hours</span></div> ' +
    '<span class="colon_sign">:</span>'+
    '<div class="cot_sale_timer_para"><span class="span_1">%M</span><span class="span_2">Min</span></div> ' +
    '<span class="colon_sign">:</span>'+
    '<div class="cot_sale_timer_para"><span class="span_1">%S</span><span class="span_2">Sec</span></div> ' 
    
    ));
  });
  // countdown jquery file ends here
});