$(function () {
    //首頁大圖輪播
    $(".banner-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        items: 1,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
    });
    
    //城市輪播
    $(".city-carousel").owlCarousel({
        autoplay: true,
        slideTransition: "linear",
        autoplaySpeed: 9000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    });

    //首頁navbar滑動換樣式
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 1000) {
            $("#home-nav-container").addClass("bg-white");
        }
        if (scrollTop < 1000) {
            $("#home-nav-container").removeClass("bg-white");
        }
    });
});
