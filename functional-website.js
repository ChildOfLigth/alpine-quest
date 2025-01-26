$(document).on("DOMContentLoaded", function () {
  const button_chenge_theme = $(
    ".header-content_chenge-theme-buttons > button"
  );

  button_chenge_theme.on("click", function () {
    button_chenge_theme.removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("dark-theme")) {
      $("body").addClass("dark-theme");
    } else {
      $("body").removeClass("dark-theme");
    }
  });

  function increaseNumberOf(el, startNum, lastNum, duration) {
    const step = (lastNum - startNum) / duration;
    let currentNum = startNum;

    const intervalId = setInterval(() => {
      currentNum += step;
      if (currentNum >= lastNum) {
        currentNum = lastNum;
        clearInterval(intervalId);
      }
      el.text(Math.round(currentNum));
    }, 10);
  }

  const el_h3_distance = $("#distance h3");
  const el_h3_number_of_tours = $("#number_of_tours h3");
  let activeAnimate = false;

  $(window).on("scroll", function () {
    if (window.scrollY >= 1023 && !activeAnimate) {
      increaseNumberOf(el_h3_distance, 0, 150, 150);
      increaseNumberOf(el_h3_number_of_tours, 0, 50, 150);
      activeAnimate = true;
    }
  });
});
