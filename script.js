const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  mainNav?.classList.toggle("is-open");
});

mainNav?.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => {
    mainNav?.classList.remove("is-open");
  });
});
