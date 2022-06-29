const menu = document.querySelector("#menu");
const nav = document.querySelector("#nav");
const close = document.querySelector("#close img");

menu.addEventListener("click", () => {
  nav.classList.add("slide");
});

close.addEventListener("click", () => {
  nav.classList.remove("slide");
});
