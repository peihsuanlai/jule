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

    //漢堡選單切換
    $(".menu-icon").click(function () {
        $(this).addClass("d-none");
        $(".close-icon").toggleClass("d-none");
    });

    $(".close-icon").click(function () {
        $(this).toggleClass("d-none");
        $(".menu-icon").toggleClass("d-none");
    });

    //首頁navbar滑動換樣式
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $("#home-nav-container").addClass("bg-white");
        }
        if (scrollTop < 100) {
            $("#home-nav-container").removeClass("bg-white");
        }
    });

    $(".city-carousel").owlCarousel({
        items: 3,
        autoplay: true,
        slideTransition: "linear",
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
        loop: true,
        dots: false,
        nav: false,
    });
});
