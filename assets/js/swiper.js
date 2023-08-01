const swiperIntro = new Swiper(".intro-swiper", {
  direction: "vertical",
  loop: true,

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination-intro",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperNews = new Swiper(".news-swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,

  autoplay: {
    delay: 4000,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
