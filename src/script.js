//carousel functions
const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

let currentIndex = 0;

function showSlide(index) {
  const totalSlides = document.querySelectorAll(".image-container img").length;
  index = (index + totalSlides) % totalSlides;
  const translateValue = -index * 100 + "%";
  carousel.style.transform = "translateX(" + translateValue + ")";
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

//Show more button functions
document.getElementById("toggleButton").addEventListener("click", function () {
  var row2 = document.getElementById("row2");
  if (row2.style.display === "none") {
    row2.style.display = "flex";
    this.innerText = "Show Less";
  } else {
    row2.style.display = "none";
    this.innerText = "Show More";
  }
});

//back to top function
document.addEventListener("DOMContentLoaded", function () {
  var backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
//transitions
AOS.init({
  duration: 1000,
  offset: 100,
});
