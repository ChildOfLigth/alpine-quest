$(document).on("DOMContentLoaded", function () {
  const button_chenge_theme = $(
    ".header-content_chenge-theme-buttons > button"
  );
  const presentBlock_img = $(".present-photo");

  function applyTheme(isDark) {
    if (isDark) {
      $("body").addClass("dark-theme");
      presentBlock_img.attr("src", "imgs/alps-nigth.webp");
      button_chenge_theme.removeClass("active");
      $(".dark-theme").addClass("active");
    } else {
      $("body").removeClass("dark-theme");
      presentBlock_img.attr("src", "imgs/photo-for-mainBlock.webp");
      button_chenge_theme.removeClass("active");
      $(".light-theme").addClass("active");
    }
  }

  const status_active_theme =
    localStorage.getItem("active-dark-theme") === "true";
  applyTheme(status_active_theme);

  button_chenge_theme.on("click", function () {
    const isDark = $(this).hasClass("dark-theme");
    button_chenge_theme.removeClass("active");
    $(this).addClass("active");

    if (isDark) {
      localStorage.setItem("active-dark-theme", "true");
    } else {
      localStorage.setItem("active-dark-theme", "false");
    }

    applyTheme(isDark);
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
