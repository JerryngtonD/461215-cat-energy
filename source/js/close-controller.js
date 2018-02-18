var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--links-nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--links-hidden")) {
    navMain.classList.remove("main-nav--links-hidden");
    navMain.classList.add("main-nav--links-opened");
  } else {
    navMain.classList.add("main-nav--links-hidden");
    navMain.classList.remove("main-nav--links-opened");
  }
});
