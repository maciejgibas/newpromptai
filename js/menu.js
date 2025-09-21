document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    if (hamburger && navLinks) {
      // kliknięcie w burgera – przełączanie widoczności
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
  
      // kliknięcie w link – zamykanie menu
      const links = navLinks.querySelectorAll("a");
      links.forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }
  });
  