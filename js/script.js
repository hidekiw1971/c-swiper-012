jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  // slider1
  var slider1 = new Swiper(".slider1", {
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // slider2
  var slider2 = new Swiper(".slider2", {
    effect: "slide",

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
