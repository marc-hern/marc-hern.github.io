(function($) {
    'use strict';
    
    /* ----------------------------------------------- */
    /* PRELOADER                                       */
    /* ----------------------------------------------- */
    $(window).on('load', function() {
        $('#preloader').delay(300).fadeOut('slow', function() {
            $(this).remove();
        });
    });
    
    /* JS for Scrollreveal */
    window.sr = ScrollReveal({reset: true});
    sr.reveal('.about-area', {duration: 1200});
    sr.reveal('.skills-area', {duration: 1200});
    sr.reveal('.contact-area', {duration: 1200});
    
    
    
    $(document).ready(function() {
        
        /* ----------------------------------------------- */
        /* BACKGROUND MENU ON SCROLL                       */
        /* ----------------------------------------------- */
        /* Adds and removes sticky-menu class when scrolling */
        $(window).on('scroll', function() {
            var menu_area = $('.menu-area');
            if ($(window).scrollTop() > 200){
                menu_area.addClass('sticky-menu');
            } else {
                menu_area.removeClass('sticky-menu');
            }
            
            
//            $('.skills-area').each(function {
//                var bottomObj = $(this).offset().top + $(this).outerHeight();
//                var bottomWindow = $(window).scrollTop() + $(window).height();
//                
//                if(bottomObj > bottomWindow) {
//                    $(this).animate({'opacity': '1'}, 500);
//                }
//            });
        });
        /* Background scroll end -->
        
        
        
        /* ----------------------------------------------- */
        /* NAVIGATION COLLAPSE                             */
        /* ----------------------------------------------- */
        /* Detects the enter/exit of elements in the viewport when the user scrolls.
           Target is navbar-collapse */
        $(document).on('click', '.navbar-collapse.in', function(e){
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        /* Navigation collapse end -->
        
        
        
        /* ----------------------------------------------- */
        /* SMOOTH SCROLL                                   */
        /* ----------------------------------------------- */
        $('a.smooth_scroll').on("click", function(e){
            e.preventDefault();
            
            var anchor = $(this);
            
            $('html, body').stop().animate( {
                scrollTop: $(anchor.attr('href')).offset().top - 50}, 1000);
        });
        /* Smooth scroll end */
        
        
        /* ----------------------------------------------- */
        /* TYPED.JS                                        */
        /* ----------------------------------------------- */
        /* Typed.js Library for animated typing of pre-defined strings
           strings: words to be typed
           typeSpeed: speed of animation
           loop: continuous playback */
        var element = $(".typejs");
        $(function() {
            element.typed({
                strings: ["web applications.", "android applications.", "anything :)."],
                typeSpeed: 80,
                loop: true,
            });
        });
        /* Typed.js end */
        
        
        /* ----------------------------------------------- */
        /* MIXITUP.JS                                      */
        /* ----------------------------------------------- */
        /* Mixitup.js Dependency-free library for animated organization */
        $('.portfolio').mixItUp();
        /* Mixitup end */
        
        
        /* ----------------------------------------------- */
        /* MAGNIFIC-POPUP.JS                               */
        /* ----------------------------------------------- */
        /* Magnific-popup.js Responsive script for pop up images */
        $('.project-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element){
                    return element.find('img');
                }
            }
        });
        
        
        /* ----------------------------------------------- */
        /* AJAX                                            */
        /* ----------------------------------------------- */
        /* Allows asynchonous updates to page without reload */
        var $contactForm = $('#ajax-contact');
        
        $contactForm.submit(function(e) {
            e.preventDefault();
            
            $.ajax({
                url: '//formspree.io/mar.hernandez010@gmail.com',
                dataType: 'json',
                method: 'POST',
                data: $(this).serialize(),
                
                beforeSend: function() {
                    // Hide all previous alerts to avoid stacking
                    $contactForm.find('.alert--loading').hide();
                    $contactForm.find('.alert--success').hide();
                    $contactForm.find('.alert--error').hide();
                    
                    $contactForm.append('<div class="alert alert--loading"><b>Sending message...</b></div>');
                },
                
                success: function(data) {
                    $contactForm.find('.alert--loading').hide();
//                    $contactForm.find('.alert--success').hide();
//                    $contactForm.find('.alert--error').hide();
                    
//                    if ($(".alert--success")[0]) {
//                        $contactForm.('.alert--success').hide();
//                    }
//                    if ($(".alert--error")[0]) {
//                        $contactForm.('.alert--success').hide();
//                    }
                    
                    $contactForm.append('<div class="alert alert--success"><b>     Message sent.  Thank you!</b></div>');
                },
                
                error: function(err) {
                    $contactForm.find('.alert--loading').hide();
//                    $contactForm.find('.alert--success').hide();
//                    $contactForm.find('.alert--error').hide();
                    
//                    if ($(".alert--success")[0]) {
//                        $contactForm.('.alert--success').hide();
//                    }
//                    if ($(".alert--error")[0]) {
//                        $contactForm.('.alert--success').hide();
//                    }
                    
                    $contactForm.append('<div class="alert alert--error"><b>    Oops, there was an error!  Please recheck fields.</b></div>');
                }
            });
        });
        
        
        
    
    });  // End of $(document).ready
})(jQuery);