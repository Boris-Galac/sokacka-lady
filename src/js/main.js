if (!document.querySelector(".main").classList.contains("gallery-main")) {
  ///// HAM BTN AND NAV OPEN/CLOSEDS

  const hamBtn = document.querySelector(".ham-btn");
  const nav = document.querySelector(".nav");
  hamBtn.addEventListener("click", (e) => {
    if (nav.getAttribute("aria-expanded") === "false") {
      nav.setAttribute("aria-expanded", "true");
      hamBtn.setAttribute("data-active", "true");
    } else {
      nav.setAttribute("aria-expanded", "false");
      hamBtn.setAttribute("data-active", "false");
    }
    nav.addEventListener("click", (e) => {
      if (!e.target.matches(".nav__list")) {
        nav.setAttribute("aria-expanded", "false");
        hamBtn.setAttribute("data-active", "false");
      }
    });
  });

  // swiper testimonials cards

  var swiper = new Swiper(".testimonials__wrapper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
} else {
  // baguettebox

  baguetteBox.run(".gallery");
}

///////// INTERSECTION OBSERVER

// from left stagger

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
      //  else {
      //   entry.target.classList.remove("active");
      // }
    });
  },
  { threshold: 0.2 }
);
// left
const left = document.querySelectorAll(".hidden-left");
left.forEach((el) => observer.observe(el));
// right
const right = document.querySelectorAll(".hidden-right");
right.forEach((el) => observer.observe(el));
// bottom
const fade = document.querySelectorAll(".hidden-fade");
fade.forEach((el) => observer.observe(el));
