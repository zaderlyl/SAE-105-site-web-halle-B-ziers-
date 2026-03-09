document.addEventListener("DOMContentLoaded", () => {
  // Apparition du header
  const menu = document.querySelector(".menu");
  menu.classList.add("show");

  // Menu mobile
  const mobileBtn = document.querySelector(".menu__mobile__brand");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");
  const closeBtn = document.getElementById("closeMenu");

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const fleche = document.getElementById("Fleche");
  const basPage = document.getElementById("bas_page");

  let atBottom = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        atBottom = entry.isIntersecting;

        if (atBottom) {
          fleche.classList.add("up");
        } else {
          fleche.classList.remove("up");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(basPage);

  fleche.addEventListener("click", () => {
    if (atBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      basPage.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
