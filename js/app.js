$(document).ready(function(){
  $(".slider__list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`
  });
});

$(document).ready(function(){
  $(".slider__cate-list").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    draggable: false,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: 'unslick',
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$(document).ready(function(){
  $(".box-slide").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: false,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`
  });
});

$(document).ready(function(){
  $(".slide-intro").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    dots: true,
    prevArrow:`<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right"></i></button>`
  });
});

