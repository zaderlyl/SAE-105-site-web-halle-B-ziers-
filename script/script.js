document.addEventListener("DOMContentLoaded", () => {
  const background = document.querySelector(".background__title");
  const title = document.querySelector(".Text h1");
  const subtitle = document.querySelector(".Text h2");
  const menu = document.querySelector(".menu");

  setTimeout(() => {
    menu.classList.add("show");
  }, 100);
  // Étape 1 : background
  setTimeout(() => {
    background.classList.add("show");
  }, 200);

  // Étape 2 : textes
  setTimeout(() => {
    title.classList.add("show");
    subtitle.classList.add("show");
  }, 900);

  // Apparition du header
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

  // LIGHTBOX
  const images = document.querySelectorAll(".zoomable");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn2 = document.querySelector(".close");
  const nextBtn = document.querySelector(".arrow.right");
  const prevBtn = document.querySelector(".arrow.left");

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      lightboxImg.src = img.src;
      lightbox.classList.add("active");
    });
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  closeBtn2.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    // empêche le scroll de la page
    if (
      ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", " "].includes(e.key)
    ) {
      e.preventDefault();
    }

    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "Escape") closeBtn2.click();
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
