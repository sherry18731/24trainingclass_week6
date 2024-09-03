const swiper = new Swiper('.swiper', {

    slidesPerView: 1,/*(一次呈現幾張)*/
    slidesPerGroup: 1,/*(一個群組內有幾張投影片)*/
    spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination-custom',
      type: "fraction"
    },
    // 左右箭頭    
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    breakpoints: {
      996: {
        slidesPerView: 2,/*(一次呈現幾張)*/
        slidesPerGroup: 2,/*(一個群組內有幾張投影片)*/
        spaceBetween: 48,
      },
    },
  });

