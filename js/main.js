// main.js

// gnb hover 액션
$(function(){
  $('#gnb .depth1 > li').hover(
    function(){
      $(this).find('.depth2').stop().fadeIn();
    },
    function(){
      $(this).find('.depth2').stop().fadeOut();
    }
  );

});

//Swiper Slider
$(function() {
  const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal', //가로, 세로 (horizontal, vertical)
      loop: true,
      autoplay: true, //자동재생
    
      // 필요시 사용(pager)
      pagination: {
        el: '.swiper-pagination',
      },
    
      // 방향키 (Navigation arrows)
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // 스크롤바 (scrollbar)
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
})