var scrollTop, scrollValueSm;



$(window).scroll(function(){
    scrollTop = $(document).scrollTop();
    scrollValueSm= (scrollTop / 2)-30;
    scrollValueSl= (scrollTop / 2)+380;
    if ($(window).width() > 600) {
        $('#indexBanner2').css({
            backgroundPosition: 'center '+ scrollValueSl + 'px'
        })
        $('#indexBanner3').css({
            backgroundPosition: 'center '+ scrollValueSm + 'px'
        })
    }




});

$('#indexSlider > .slide-parent').slick({
    fade: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    autolaySpeed: 2000
})

$('#destinationBanner').waypoint(function(){
    console.log('asd');
    $('.choice-module').addClass('active');
}, {offset: '70%'})

$('.mobile-handle').on('click',function(){
    $(this).toggleClass('active');
    $('.nav-ul').toggleClass('active');
})

$('.register-handle').on('click', function(){
    $('#registerPop').addClass('active');
})

$('.login-handle').on('click', function(){
    $('#loginPop').addClass('active');
})

$('.popup-fader').on('click', function(){
    $(this).parent().removeClass('active');
})


$('<div class="jo-checkbox-mask"></div>').insertAfter('.jo-checkbox');

$('.jo-checkbox').on('click', function(){
    $(this).parent().find('.jo-checkbox-mask').toggleClass('active');
})

$('.tips-handle').on('click', function(){

    $('.tips-handle').removeClass('active');
    $(this).addClass('active');
})


$('.choice-belt').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  buttons: false,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$('.nav-ul > li').on('click', function(){
    $(this).find('.sub-menu').toggleClass('active')
})

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll > 150) {
        $('#navbar').addClass('scrolled');
    }
    else {
        $('#navbar').removeClass('scrolled');
    }
});
