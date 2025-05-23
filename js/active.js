(function ($) {
    'use strict';

    var browserWindow = $(window);

    // 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // 2.0 Navbar Active Code
    if ($.fn.classyNav) {
        $('#newsboxNav').classyNav();
    }

    // 3.0 Newsticker Active Code
    if ($.fn.simpleTicker) {
        $.simpleTicker($("#breakingNewsTicker"), {
            speed: 1000,
            delay: 3000,
            easing: 'swing',
            effectType: 'roll'
        });
    }

    // 4.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $('.hero-post-slides');
        var videoSlides = $('.video-slides');

        // Welcome Slider
        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var animName = $(this).data('animation');
                $(this).removeClass('animated ' + animName).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var animName = $(this).data('animation');
                $(this).addClass('animated ' + animName).css('opacity', '1');
            });
        });

        // Set animation delays and durations
        $("[data-delay]").each(function () {
            var animDelay = $(this).data('delay');
            $(this).css('animation-delay', animDelay);
        });

        $("[data-duration]").each(function () {
            var animDuration = $(this).data('duration');
            $(this).css('animation-duration', animDuration);
        });

        // Video Slider
        videoSlides.owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: { items: 1 },
                576: { items: 2 },
                992: { items: 3 }
            }
        });
    }

    // 5.0 Video Active Code
    if ($.fn.magnificPopup) {
        $('.video-btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // 6.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    // 7.0 CounterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // 8.0 Progress Bar Active Code
    if ($.fn.circleProgress) {
        $('.circle').each(function () {
            var $this = $(this);
            $this.circleProgress({
                size: 160,
                emptyFill: "rgba(0, 0, 0, .0)",
                fill: '#a2a2a2',
                thickness: '3',
                reverse: true
            });
        });
    }

    // 9.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // 10.0 Prevent Default a Click
    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    // 11.0 WOW.js Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

})(jQuery);