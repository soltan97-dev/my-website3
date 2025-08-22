document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});

// Год в футере
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

// Анимации при скролле
const observers = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

observers.forEach(el => observer.observe(el));