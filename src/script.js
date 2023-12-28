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

//icon grid functions
const skills = [
  { name: "HTML", icon: "src/images/html-icon.png" },
  { name: "CSS", icon: "src/images/css-icon.png" },
  { name: "JavaScript", icon: "src/images/javascript-icon.png" },
  { name: "Bootstrap", icon: "src/images/bootstrap-icon.png" },
  { name: "VS Code Editor", icon: "src/images/editor-icon.png" },
  { name: "API", icon: "src/images/api-icon.png" },
  { name: "GitHub", icon: "src/images/github-icon.png" },
  { name: "Netlify Hosting", icon: "src/images/hosting-icon.png" },
  { name: "Responsive Design", icon: "src/images/responsive-icon.png" },
  { name: "Flexbox", icon: "src/images/flexbox-icon.png" },
  { name: "SEO", icon: "src/images/seo-icon.png" },
  { name: "React", icon: "src/images/React-icon.png" },
  { name: "AI", icon: "src/images/ai-icon.png" },
];

const columns = 12;
const rows = Math.ceil(skills.length / columns);
const skillsContainer = document.getElementById("skillsContainer");

for (let i = 0; i < rows; i++) {
  const rowDiv = document.createElement("div");
  rowDiv.classList.add("row");

  for (let j = 0; j < columns; j++) {
    const skillIndex = i * columns + j;
    if (skillIndex < skills.length) {
      const skill = skills[skillIndex];

      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-3");

      const skillIconDiv = document.createElement("div");
      skillIconDiv.classList.add("skill-icon");

      const img = document.createElement("img");
      img.src = skill.icon;
      img.alt = skill.name;
      img.classList.add("img-fluid", "mx-auto", "d-block", "rounded");

      skillIconDiv.appendChild(img);
      colDiv.appendChild(skillIconDiv);
      rowDiv.appendChild(colDiv);
    }
  }

  skillsContainer.appendChild(rowDiv);
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
