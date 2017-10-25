$(document).ready(function(){
    var scrollTop, scrollValueSm;


    $(window).scroll(function(){
        scrollTop = $(document).scrollTop();
        scrollValueSm= (scrollTop / 2)-80;
        scrollValueSl= (scrollTop / 2)+380;
        if ($(window).width() > 1040) {
            // $('#indexBanner2').css({
            //     backgroundPosition: 'center '+ scrollValueSl + 'px'
            // })
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
        autolaySpeed: 2000,
        dots: true,
    });

    // $('#travelHighlights').slick({
    //     slidesToShow: 4,
    //     arrows: false,
    //     focusOnSelect: true,
    //     infinite: false,
    //     variableWidth: true,
    //     dots: true,
    //     responsive: [
    //       {
    //         breakpoint: 1025,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: false
    //         }
    //       },
    //       {
    //         breakpoint: 800,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //           infinite: false
    //         }
    //       },
    //     ]
    // })

    console.log('newnewnew');

    $('#destinationBanner').waypoint(function(){
        console.log('asd');
        $('.choice-module').addClass('active');
    }, {offset: '70%'});

    $('.mobile-handle').on('click',function(){
        $(this).toggleClass('active');
        $('.nav-ul').toggleClass('active');
    });

    $('.register-handle').on('click', function(){
        $('.jo-popup').removeClass('active');
        $('#registerPop').addClass('active');
    });

    $('.login-handle').on('click', function(){
        $('#loginPop').addClass('active');
    });

    $('body').on('click', '.popup-fader', function(){
        $(this).parent().removeClass('active');

    });

    $('body').on('click', '.close-button', function(){
        console.log('asd');
        $(this).parents('.jo-popup').removeClass('active');
    })


    $('#account-handle').on('click', function(){
        $('.account-ul').toggleClass('active');
    });
    $('<div class="jo-checkbox-mask"></div>').insertAfter('.jo-checkbox');

    $('.jo-checkbox').on('click', function(){
        $(this).parent().find('.jo-checkbox-mask').toggleClass('active');
    });

    $('.tips-handle').on('click', function(){

        $('.tips-handle').removeClass('active');
        $(this).addClass('active');
    });




    $('.choice-belt').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      variableWidth: true,
      buttons: false,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false
          }
        },
      ]
    });

    $('.nav-ul > li').on('click', function(){
        $(this).find('.sub-menu').toggleClass('active')
    });

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
    });




    $('.highlight-module > .w100').slick({
        variableWidth: false,
        dots: true,
        swipe: false,
        infinite: false,
        arrows: true,
        nextArrow: '<div class="arrow-box next"><div class="arrow"></div></div>',
        prevArrow: '<div class="arrow-box prev"><div class="arrow"></div></div>'
    });

    $('#travelHighlights').slick({
        slidesToShow: 4,
        dots: true,
        // variableWidth: true,
        infinite: false,
        arrows: false,
        responsive: [
       {
         breakpoint: 1424,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1,
           infinite: true,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
           arrows: true,
        //    nextArrow: '<div class="arrow-box next"><div class="arrow"></div></div>',
        //    prevArrow: '<div class="arrow-box prev"><div class="arrow"></div></div>'
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,

         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
    });

    $('.read-handle').on('click', function(){
        $('.highlight-desc').removeClass('active');
        $('.highlight-summary').mCustomScrollbar('destroy');
        $(this).parent().find('.highlight-summary').mCustomScrollbar({});
        $(this).parent().toggleClass('active');
    });

    $('.close-handle').on('click', function(){
        $('.highlight-summary').mCustomScrollbar('destroy');
        $(this).parent().toggleClass('active');
    });


});
