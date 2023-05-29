// Title Animation
const title = document.getElementById("title-animation");
const letters = title.textContent.split("");
title.textContent = "";

for (let i = 0; i < letters.length; i++) {
  const span = document.createElement("span");
  span.textContent = letters[i] === " " ? "\u00A0" : letters[i];
  span.className = "letter-animation hidden";
  span.style.animationDelay = `${i * 100}ms`;
  title.appendChild(span);
}

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const aboutSection = document.getElementById("about");
  const skillsSection = document.getElementById("skills");
  const aboutDescription = document.querySelector(".about-description");
  const skillsItems = document.querySelectorAll(".skills-item");

  if (
    isInViewport(aboutSection) &&
    aboutDescription.classList.contains("hidden")
  ) {
    aboutDescription.classList.remove("hidden");
    aboutDescription.classList.add("fade-in");
  }

  skillsItems.forEach((item) => {
    if (isInViewport(item) && item.classList.contains("hidden")) {
      item.classList.remove("hidden");
      item.classList.add("fade-in");
    }
  });
}

// Add scroll event listener
document.addEventListener("scroll", handleScroll);

// Carousel
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
    perPage: 2,
    autoplay: true,
    interval: 3000,
    breakpoints: {
      768: {
        perPage: 1,
        height: "80vh",
      },
    },
  }).mount();
});
