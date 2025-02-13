const button_chenge_theme = $(".header-content_chenge-theme-buttons > button");
const presentBlock_img = $(".present-photo");

function applyTheme(isDark) {
  if (isDark) {
    $("body").addClass("dark-theme");
    presentBlock_img.attr("src", "imgs/alps-nigth.webp");
    button_chenge_theme.removeClass("active");
    $(".dark-theme").addClass("active");
  } else {
    $("body").removeClass("dark-theme");
    presentBlock_img.attr("src", "imgs/alps.jpg");
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

  localStorage.setItem("active-dark-theme", isDark.toString());
  applyTheme(isDark);
});

function increaseNumberOf(el, startNum, lastNum, dopContent, duration) {
  const interval = 10;
  const steps = duration / interval;
  const step = (lastNum - startNum) / steps;
  let currentNum = startNum;

  const intervalId = setInterval(() => {
    currentNum += step;

    if (currentNum >= lastNum) {
      currentNum = lastNum;
      clearInterval(intervalId);
    }

    el.text(Math.round(currentNum) + " " + dopContent);
  }, interval);
}

const el_h3_distance = $(".distance");
const el_h3_number_of_tours = $(".number_of_tours");
let activeAnimate = false;

$("body").on("scroll", function () {
  if ($(this).scrollTop() >= 1600 && !activeAnimate) {
    increaseNumberOf(el_h3_distance, 0, 150, "км", 1500);
    increaseNumberOf(el_h3_number_of_tours, 0, 50, "туров", 1500);
    activeAnimate = true;
  }
});

const breakPoint = window.matchMedia("(max-width: 660px)");
if (breakPoint.matches) {
  $(".open-dop-content").html('<img src="imgs/down1.svg"/>');
}
$(".open-dop-content").on("click", function () {
  $(".types-of-tours_variant-list").toggleClass("show");
  $(".open-dop-content").html('<img src="imgs/down2.svg"/>');
  if (!$(".types-of-tours_variant-list").hasClass("show")) {
    $(".open-dop-content").html('<img src="imgs/down1.svg"/>');
  }
});

const breakPoint_for_footer = window.matchMedia("(max-width: 720px)");
if (breakPoint_for_footer.matches) {
  $(".arrow-for-showContent").html('<img src="imgs/down1.svg"/>');
}

$(".arrow-for-showContent").each(function () {
  $(this).on("click", function () {
    let button = $(this);
    let text = button.closest(".method_text-part").find("p");

    text.toggleClass("show");

    if (text.hasClass("show")) {
      button.html('<img src="imgs/down2.svg"/>');
    } else {
      button.html('<img src="imgs/down1.svg"/>');
    }
  });
});
