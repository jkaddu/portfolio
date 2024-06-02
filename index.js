// Nav Buttons
const navBtn = document.querySelectorAll("a");

for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener("mouseenter", function () {
    navBtn[i].style.transform = "scale(1.1)";
    navBtn[i].style.transition = "all 0.3s";
  });

  navBtn[i].addEventListener("mouseleave", function () {
    navBtn[i].style.transform = "scale(1)";
  });
}

// Anchor Tags
const h1Btn = document.querySelector(".scroll-top");
const aboutBtn = document.querySelector(".scroll-about");
const projectsBtn = document.querySelector(".scroll-projects");
const contactBtn = document.querySelector(".scroll-contact");
const headerSection = document.querySelector("header");
const aboutSection = document.querySelector(".about_section");
const projectsSection = document.querySelector(".projects_section");
const contactFooter = document.querySelector("footer");

h1Btn.addEventListener("click", function () {
  headerSection.scrollIntoView({ behavior: "smooth" });
});
aboutBtn.addEventListener("click", function () {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});
projectsBtn.addEventListener("click", function () {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
contactBtn.addEventListener("click", function () {
  contactFooter.scrollIntoView({ behavior: "smooth" });
});

// Project Buttons
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");

one.addEventListener("click", function () {
  window.open("https://bookr-seven.vercel.app/", "_blank");
});

two.addEventListener("click", function () {
  window.open("https://create-react-app-seven-drab.vercel.app/", "_blank");
});

three.addEventListener("click", function () {
  window.open("https://github.com/jkaddu/Tops_Backend", "_blank");
});

four.addEventListener("click", function () {
  window.open("https://wcc2-g1gne3zmb-jkaddu.vercel.app/", "_blank");
});

// MENU Navigation
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
