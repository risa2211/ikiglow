(function ($) {
    "use strict";

    // Array of mental health quotes
    var quotes = [
        "\"Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity.\"",
        "\"It's okay to not be okay. Just don't give up. You are not alone.\"",
        "\"Be kind to your mind.\"",
        "\"Your mental health matters more than anything else. Don't ever forget that.\"",
        "\"Taking care of your mental health is not selfish. It's necessary.\"",
        "\"You are stronger than you think. You've got this.\"",
        "\"Don't let your struggle become your identity. You are so much more than your mental health challenges.\"",
        "\"Every day may not be good, but there is something good in every day.\"",
        "\"Your mental health is just as important as your physical health.\"",
        "\"You are enough, just as you are."
    ];

    // Function to generate and display a random quote
    function displayRandomQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        $('#quote-container').text(quotes[randomIndex]);
    }

    // Display an initial quote
    displayRandomQuote();

    // Update the quote every 10 seconds
    setInterval(displayRandomQuote, 5000);
    
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });

    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
        
        // Click event for previewable images
        $('.previewable').click(function () {
            var imageSrc = $(this).find('img').attr('src');
            previewImage(imageSrc);
        });
    });

    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    window.previewImage = function (imageSrc) {
        $.magnificPopup.open({
            items: {
                src: imageSrc
            },
            type: 'image'
        });
    };

})(jQuery);

