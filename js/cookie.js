document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
  
    if (!localStorage.getItem("cookiesAccepted")) {
      banner.classList.add("show");
    }
  
    acceptBtn.addEventListener("click", () => {
      localStorage.setItem("cookiesAccepted", "true");
      banner.classList.remove("show");
    });
  });
  