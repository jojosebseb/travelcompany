var scrollTop, scrollValueSm;


$(window).scroll(function(){
    scrollTop = $(document).scrollTop();
    scrollValueSm= (scrollTop / 2)-30;
    scrollValueSl= (scrollTop / 2)+380;
    if ($(window).width() > 1040) {
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

$('#travelHighlights').slick({
    slidesToShow: 4,
    arrows: false,
    focusOnSelect: true,
    variableWidth: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false
        }
      },
    ]
})

console.log('newnewnew');

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
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false
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
var bg;
$('.gallery-flex').on('mouseenter', '.flex-module', function(){
    bg = $(this).find('.img-choice').attr('src');
    $('.bg').css({
        'background-image' : 'url('+bg+')'
    });
});

$('.admin-gallery-flex').on('click', '.flex-module', function(){
    $('.popup-parent').addClass('active');
    bg = $(this).find('img').attr('src');
    $('.popup-img').attr('src', bg)
});

$('.popup-parent').on('click', function(){
    $(this).removeClass('active');
})
