$(document).ready(function(){

    var swiper = new Swiper('.swiper-container', {
        effect: 'fade',
        autoplay: {
            delay: 5000,
          },
        speed:700,
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,
        },
        
      });

    var swiper = new Swiper('.swiper-container1', {
        loop:true,
        
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
          },
        speed:700,
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
          },
        
      });

      var swiper = new Swiper('.swiper-container2', {
        loop:true,
        
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
          },
        speed:700,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
          },
        
      });

      var swiper = new Swiper('.swiper-container3', {
        loop:true,
        
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
          },
        speed:700,
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
          },
        
      });

      var swiper = new Swiper('.swiper-container4', {
        loop:true,
        
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
          },
        speed:700,
        navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4',
          },
        
      });
    




    var didScroll;

    $(window).scroll(function(){
        didScroll = true;
    })

    setInterval(function(){
        if(didScroll){
            hasScrolled();
            didScroll = false;
        }
        
    },100);

    function hasScrolled(){

        var windowWit = $(window).scrollTop();

        if(windowWit == 0){
            $("header").removeClass("on");
        }else{
            $("header").addClass("on");
        }
    }
    


    // 메뉴제어
    $(".top-left a").click(function(e){
        e.preventDefault();
        $("html").addClass("expand");
        $("#dimmedSlider").css('display','block');
    })


    $(".aside-close a").click(function(e){
        e.preventDefault();
       $("html").removeClass("expand");
       $("#dimmedSlider").css('display','none');
    })


});