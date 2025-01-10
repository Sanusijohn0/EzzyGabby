const icon = document.getElementById("navbar-toggler");
const close = document.querySelector("#close");
const nav2 = document.querySelector(".nav-2");

icon.addEventListener("click", () => {
  nav2.style.display = "flex";
});

close.addEventListener("click", () => {
  nav2.style.display = "none";
});
