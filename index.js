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

// Tags
const aboutBtn = document.querySelector(".scroll-about");
const projectsBtn = document.querySelector(".scroll-projects");
const contactBtn = document.querySelector(".scroll-contact");
const aboutSection = document.querySelector(".about_section");
const projectsSection = document.querySelector(".projects_section");
const contactFooter = document.querySelector("footer");

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

one.addEventListener("click", function () {
  window.location.href = "https://bookr-jkaddu.vercel.app/";
});

two.addEventListener("click", function () {
  window.location.href = "https://create-react-app-jkaddu.vercel.app/";
});

three.addEventListener("click", function () {
  window.location.href = "https://wcc2-g1gne3zmb-jkaddu.vercel.app/";
});
