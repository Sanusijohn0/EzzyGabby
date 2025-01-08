const menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

const hiddenText = document.getElementById("hidden");
const hiddenButton = document.getElementById("hidden-button");

hiddenButton.addEventListener("click", () => {
  hiddenText.classList.toggle("hidden");
});
