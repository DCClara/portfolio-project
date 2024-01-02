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
