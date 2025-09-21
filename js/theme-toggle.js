// theme-toggle.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  const body = document.body;

  // migracja starych wartości z localStorage
  const legacy = localStorage.getItem("theme");
  const map = { "light-theme": "light", "dark-theme": "dark" };
  const saved = map[legacy] || legacy;

  if (saved === "light" || saved === "dark") {
    body.classList.add(`${saved}-theme`);
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    body.classList.add(prefersDark ? "dark-theme" : "light-theme");
  }

  // toggle motywu
  btn?.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    }
  });

  // animacja fade-in
  const faders = document.querySelectorAll(".fade-in");
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -100px 0px" });

  faders.forEach(el => obs.observe(el));
});
