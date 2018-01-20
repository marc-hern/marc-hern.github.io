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
        /* AJAX                                      */
        /* ----------------------------------------------- */
        var $contactForm = $('#ajax-contact');
        $contactForm.submit(function(e) {
            e.preventDefault();
            
            $.ajax({
                url: '//formspree.io/mar.hernandez010@gmail.com',
                dataType: 'json',
                method: 'POST',
                data: $(this).serialize(),
                
                beforeSend: function() {
                    $contactForm.append('<div class="alert alert--loading">Sending message...</div>');
                },
                
                success: function(data) {
                    $contactForm.find('.alert--loading').hide();
                    $contactForm.append('<div class="alert alert--success">Message sent.  Thank you!</div>');
                },
                
                error: function(err) {
                    $contactForm.find('.alert--loading').hide();
                    $contactForm.append('<div class="alert alert--error">Oops, there was an error!  Please recheck fields.</div>');
                }
            });
        });
        
        
        
    
    });  // End of $(document).ready
})(jQuery);