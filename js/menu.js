document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("menu-overlay");
    const closeBtn = document.getElementById("menu-close");
  
    if (hamburger && overlay && closeBtn) {
      hamburger.addEventListener("click", () => {
        overlay.classList.add("open");
      });
  
      closeBtn.addEventListener("click", () => {
        overlay.classList.remove("open");
      });
  
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.classList.remove("open");
        }
      });
    }
  });
  