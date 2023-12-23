//carousel functions
const images = [
  "shecodes-certificate-graduate.png",
  "shecodes-certificate-1.png",
  "shecodes-certificate-2.png",
  "shecodes-certificate-3.png",
  "shecodes-certificate-4.png",
  "shecodes-certificate-5.png",
  "shecodes-certificate-6.png",
  "shecodes-certificate-7.png",
  "shecodes-certificate-8.png",
  "shecodes-certificate-9.png",
  "shecodes-certificate-10.png",
];

const imgsContainer = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let currentIndex = 0;

function showImage(index) {
  imgsContainer.innerHTML = `<img src="src/images/${
    images[index]
  }" alt="shecodes-certificate-${index + 1}-image" />`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

showImage(currentIndex);

leftBtn.addEventListener("click", prevSlide);
rightBtn.addEventListener("click", nextSlide);

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
