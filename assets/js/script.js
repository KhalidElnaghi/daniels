const navEl = document.querySelector(".navbar");
const icon = document.querySelector(".navbar-icon");
const active = document.querySelector(".active");
const links = document.querySelectorAll(".nav-link");
window.addEventListener("scroll", () => {
  if (window.scrollY > "200") {
    navEl.classList.add("nav-scrolled");
    icon.classList.add("scroll-color");
    links.forEach((link) => {
      link.classList.add("scroll-color");
    });
    active.classList.add("scroll-active");
  }
});

window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("hidden-loader");
  document.querySelector(".loader").addEventListener("transitionend", () => {
    document.body.removeChild(document.querySelector(".loader"));
  });
});
