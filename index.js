const title = document.getElementById("title-animation");
const letters = title.textContent.split("");
title.textContent = "";
for (let i = 0; i < letters.length; i++) {
  const span = document.createElement("span");
  span.textContent = letters[i] === " " ? "\u00A0" : letters[i];
  span.className = "letter-animation";
  span.style.animationDelay = `${i * 100}ms`;
  title.appendChild(span);
}
// caroussel

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll("a");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var target = document.querySelector(this.hash);
        var distance = target.offsetTop;

        window.scrollTo({
          top: distance,
          behavior: "smooth",
        });
      }
    });
  }

  new Splide("#reference", {
    width: "100vw",
    height: "80vh",
    type: "loop",
    perPage: 3,
    autoplay: true,
    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      768: {
        perPage: 1,
        height: "80vh",
      },
    },
  }).mount();
});
