$(document).ready(function () {
  console.log("script running");
  $(".js-section-features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "100px;",
    }
  );

  $(".btn-full").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: $("#plans").offset().top,
      behavior: "smooth",
    });
  });

  $(".btn-ghost").on("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: $(".section-features").offset().top,
      behavior: "smooth",
    });
  });

  $("#features").waypoint(
    function (direction) {
      // $(".js--wp-1").css("opacity", "1");
      $(".js--wp-1").css("animation-name", "fadein");
      $(".js--wp-1").css("animation-duration", "1s");
      $(".js--wp-1").css("opacity", "1");
      $(".x").css("color", "#000");
      $(".mobile-nav-icon").css("color", "#000");
    },
    {
      offset: "200px",
    }
  );

  $(".hero-text-box").waypoint(
    function (direction) {
      $(".x").css("color", "#fff");
      $(".mobile-nav-icon").css("color", "#fff");
    },
    {
      offset: "0px",
    }
  );

  $("#logo-black").click(function (e) {
    e.stopPropagation();
    window.scrollTo({
      top: $("header").offset().top,
      behavior: "smooth",
    });
  });

  $("#works").waypoint(
    function (direction) {
      if (direction === "down") {
        $(".one").css("animation-name", "faderight");
        $(".one").css("animation-duration", "1.5s");
        $(".one").css("opacity", "1");
      }
    },
    {
      offset: "200px",
    }
  );

  $("#works").waypoint(function (direction) {
    if (direction === "up") {
      $(".one").css("animation-name", "faderight");
      $(".one").css("animation-duration", "1.5s");
      $(".one").css("opacity", "1");
    }
  });

  $("#plans").waypoint(
    function (direction) {
      $(".blink").addClass("animate__pulse");
    },
    {
      offset: "200px",
    }
  );
});

$(".section-testimonials").waypoint(function (direction) {
  $(".blink").removeClass("animate__pulse");
});

$(".section-form").waypoint(function (direction) {
  $(".blink").removeClass("animate__pulse");
});

$("a[href='#plans']").click(function () {
  $(".blink").removeClass("animate__pulse");
});

$("a[href='#works']").click(function () {
  $(".one").css("animation-name", "");
  $(".one").css("animation-duration", "1.5s");
  $(".one").css("opacity", "0");
});

$(".mobile-nav-icon").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(".nav-mobile").css("animation-name", "faderight");
  $(".nav-mobile").css("animation-duration", "1s");
  $(".nav-mobile").css("display", "block");
  $(".x").css("display", "block");
  $(this).css("display", "none");
});

$(".x").click(function () {
  $(".nav-mobile").css("animation-name", "fadeleft");
  $(".nav-mobile").css("animation-duration", "1s");
  //   $(".nav-mobile").css("display", "none");
  $(".mobile-nav-icon").css("display", "block");
  $(this).css("display", "none");
  $(".nav-mobile").one("animationend", function (event) {
    $(".nav-mobile").css("display", "none");
  });
});

$("body").click(function (e) {
  if ($(".nav-mobile")[0].style.display === "block") {
    $(".nav-mobile").css("animation-name", "fadeleft");
    $(".nav-mobile").css("animation-duration", "1s");
    //   $(".nav-mobile").css("display", "none");
    $(".mobile-nav-icon").css("display", "block");
    $(".x").css("display", "none");
    $(".nav-mobile").one("animationend", function (event) {
      $(".nav-mobile").css("display", "none");
    });
  }
});
