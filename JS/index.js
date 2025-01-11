const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const loadout = document.getElementById("loadout");
const loadoutBtn = document.getElementById("loadout-btn");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("none");
});

loadoutBtn.addEventListener("click", () => {
  loadout.classList.toggle("hidden");
});
