// Nav Buttons
const navBtn = document.querySelectorAll(".l1");
const abt = document.querySelector(".abt");
const prj = document.querySelector(".prj");
const rsm = document.querySelector(".rsm");
const ctc = document.querySelector(".ctc");

for (let i = 0; i < navBtn.length; i++) {
  navBtn[i].addEventListener("mouseenter", function () {
    navBtn[i].style.transform = "scale(1.1)";
    navBtn[i].style.transition = "all 0.3s";
  });

  navBtn[i].addEventListener("mouseleave", function () {
    navBtn[i].style.transform = "scale(1)";
  });
}

abt.addEventListener("click", function () {
  window.location.href = "#about";
});

prj.addEventListener("click", function () {
  window.location.href = "projects.html";
});

rsm.addEventListener("click", function () {
  window.location.href = "/images/tech_resume.pdf";
});

ctc.addEventListener("click", function () {
  window.location.href = "#contact";
});

// Project Buttons
const box = document.querySelectorAll(".box_btn");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", function () {
    box[i].style.transform = "scale(1.05)";
    box[i].style.transition = "all 0.3s";
  });

  box[i].addEventListener("mouseleave", function () {
    box[i].style.transform = "scale(1)";
  });
}

one.addEventListener("click", function () {
  window.location.href = "https://bookr-jkaddu.vercel.app/";
});

two.addEventListener("click", function () {
  window.location.href = "https://create-react-app-jkaddu.vercel.app/";
});

three.addEventListener("click", function () {
  window.location.href = "https://wcc2-g1gne3zmb-jkaddu.vercel.app/";
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
});
