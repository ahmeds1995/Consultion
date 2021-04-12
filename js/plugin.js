$(function(){

    // Scroll To Sections
    $(".navigation-bar .navbar .nav-item .nav-link, .footer .links ul li a").on("click", function(){

        $("html, body").animate({

            scrollTop: $($(this).data("section")).offset().top
        }, 1000);

        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // Fade In The Scroll To Top Button
    $(window).on("scroll", function(){

        $(this).scrollTop() > ($(".upper-nav").innerHeight() + $(".navigation-bar").innerHeight() + $(".carousel").innerHeight()) ? $(".to-top-btn").fadeIn(400) : $(".to-top-btn").fadeOut(400);
    });

    // Scroll To Top
    $(".to-top-btn").on("click", function(){

        $("html, body").animate({ scrollTop: 0 }, 1000)

        $(".navigation-bar .navbar .navbar-nav .home").addClass("active").siblings().removeClass("active");
    });

    // Trigger Owl Carousel
    $(".owl-carousel").owlCarousel({
        rtl: true,
        center: true,
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
          },
          992: {
            items: 3,
          },
        },
      });

    // Loading Screen
    $(window).on("load", function(){

      $(".loading-overlay .loading").fadeOut(2000, function(){

        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(2000, function(){

          $(this).remove();

        });

      });

    });

});