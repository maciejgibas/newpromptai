document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute("data-target"));
        const suffix = el.getAttribute("data-suffix") || "";
        let count = 0;
        const speed = 50;

        const update = () => {
          count += (target / speed);
          if (count < target) {
            el.textContent = count.toFixed(1) + suffix;
            requestAnimationFrame(update);
          } else {
            el.textContent = (target % 1 === 0 ? target : target.toFixed(1)) + suffix;
          }
        };

        update();
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  stats.forEach(stat => observer.observe(stat));
});
