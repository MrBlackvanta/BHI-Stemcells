const menuBtn = document.querySelector(".menu-btn");
const header = document.querySelector(".header");
const heroHeader = document.querySelector(".hero-header");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("header-active");
  heroHeader.classList.toggle("heroHeader-active");
});

console.log(style.opacity);
