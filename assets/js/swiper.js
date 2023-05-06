const swiperStudentLeisure = new Swiper(".studentLeisure_item_carousel", {
  slidesPerView: "auto",
  spaceBetween: 10,
  speed: 1000,
  navigation: {
    prevEl: ".carousel_nav_prev",
    nextEl: ".carousel_nav_next",
    disabledClass: "carousel_nav_disable",
    lockClass: "carousel_nav_lock",
  },
});
