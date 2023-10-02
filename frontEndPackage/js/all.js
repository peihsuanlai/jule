$(function () {

    //漢堡選單切換
    $(".menu-icon").click(function () {
        $(this).addClass("d-none");
        $(".close-icon").toggleClass("d-none");
    });

    $(".close-icon").click(function () {
        $(this).toggleClass("d-none");
        $(".menu-icon").toggleClass("d-none");
    });

    //回到上面
    $(".up-icon").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          800
        );
      });

    // nav 路徑 active 樣式
    if (location.pathname == "/about.html") {
        $("#nav-about").addClass("active");
    } else if (location.pathname == "/procedure.html") {
        $("#nav-procedure").addClass("active");
    }  else if (location.pathname == "/service.html") {
        $("#nav-service").addClass("active");
    } else if (location.pathname == "/contact.html") {
        $("#nav-contact").addClass("active");
    } else if (location.pathname == "/news.html") {
        $("#nav-news").addClass("active");
    } else if (location.pathname == "/stories.html") {
        $("#nav-stories").addClass("active");
    } else if (location.pathname == "/faq.html") {
        $("#nav-faq").addClass("active");
    } else if (location.pathname == "/wiki.html") {
        $("#nav-wiki").addClass("active");
    }


    // $(".question-btn").click(function () {
    //    $(this).children(".control-icon").toggleClass("switch")
    //   });

});