// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const texts = [
  "Backend Developer",
  "CSE Student",
  "ML Enthusiast"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = texts[i];

  if (!isDeleting) {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j++);
  } else {
    document.querySelector(".typing").textContent =
      currentText.substring(0, j--);
  }

  if (j === currentText.length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});