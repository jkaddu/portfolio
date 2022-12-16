// Home links
const one = document.querySelector(".l1");
const two = document.querySelector(".l2");
const three = document.querySelector(".l3");
const four = document.querySelector(".l4");
const box = document.querySelector(".box_btn");
const box2 = document.querySelector(".box_btn2");
const box3 = document.querySelector(".box_btn3");

one.addEventListener("click", function () {
  window.location.href = "#about";
});

one.addEventListener("mouseenter", function () {
  one.style.transform = "scale(1.1)";
  one.style.transition = "all 0.3s";
});

one.addEventListener("mouseleave", function () {
  one.style.transform = "scale(1)";
});

two.addEventListener("click", function () {
  window.location.href = "projects.html";
});

two.addEventListener("mouseenter", function () {
  two.style.transform = "scale(1.1)";
  two.style.transition = "all 0.3s";
});

two.addEventListener("mouseleave", function () {
  two.style.transform = "scale(1)";
});

three.addEventListener("click", function () {
  window.location.href = "/images/tech_resume.pdf";
});

three.addEventListener("mouseenter", function () {
  three.style.transform = "scale(1.1)";
  three.style.transition = "all 0.3s";
});

three.addEventListener("mouseleave", function () {
  three.style.transform = "scale(1)";
});

four.addEventListener("click", function () {
  window.location.href = "#contact";
});

four.addEventListener("mouseenter", function () {
  four.style.transform = "scale(1.1)";
  four.style.transition = "all 0.3s";
});

four.addEventListener("mouseleave", function () {
  four.style.transform = "scale(1)";
});

box.addEventListener("click", function () {
  window.location.href = "https://bookr-jkaddu.vercel.app/";
});

box.addEventListener("mouseenter", function () {
  box.style.transform = "scale(1.05)";
  box.style.transition = "all 0.3s";
});

box.addEventListener("mouseleave", function () {
  box.style.transform = "scale(1)";
});

box2.addEventListener("click", function () {
  window.location.href = "https://create-react-app-jkaddu.vercel.app/";
});

box2.addEventListener("mouseenter", function () {
  box2.style.transform = "scale(1.05)";
  box2.style.transition = "all 0.3s";
});

box2.addEventListener("mouseleave", function () {
  box2.style.transform = "scale(1)";
});

box3.addEventListener("click", function () {
  window.location.href = "https://wcc2-g1gne3zmb-jkaddu.vercel.app/";
});

box3.addEventListener("mouseenter", function () {
  box3.style.transform = "scale(1.05)";
  box3.style.transition = "all 0.3s";
});

box3.addEventListener("mouseleave", function () {
  box3.style.transform = "scale(1)";
});
