// Home links
const one = document.querySelector(".l1");
const two = document.querySelector(".l2");
const three = document.querySelector(".l3");
const four = document.querySelector(".l4");

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
  window.location.href = "#projects";
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
