var splide = new Splide(".splide", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
  gap: "10px",
  breakpoints: {
    1284: {
      perPage: 2,
      gap: "10px",
      height: "100%",
    },
    1016: {
      perPage: 1,
      gap: "200px",
      height: "100%",
    },
  },
});

splide.mount();

var splide1 = new Splide(".splide1", {
  type: "loop",
  drag: "free",
  snap: true,
  perPage: 3,
  gap: "10px",
  breakpoints: {
    1284: {
      perPage: 2,
      gap: "200px",
      height: "100%",
    },
    1016: {
      perPage: 1,
      gap: "200px",
      height: "100%",
    },
  },
});

splide1.mount();

const faqs = document.querySelectorAll(".faq-card");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((el) => {
      el.classList.remove("faq-card__active");
    });
    faq.classList.toggle("faq-card__active");
  });
});

const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("header-active");
});
