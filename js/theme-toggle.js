// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;

  // migracja starych wartości z localStorage
  const legacy = localStorage.getItem("theme");
  const map = { "light-theme": "light", "dark-theme": "dark" };
  const saved = map[legacy] || legacy;

  if (saved === "light" || saved === "dark") {
    body.classList.add(saved);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    body.classList.add(prefersDark ? "dark" : "light");
  }

  btn?.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  });
});

// animacja fade-in
const faders = document.querySelectorAll('.fade-in');
const obs = new IntersectionObserver((entries, o) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    o.unobserve(e.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
faders.forEach(el => obs.observe(el));
