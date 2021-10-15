const shop = document.querySelector("#shop");
const subNav = document.querySelector(".sub-nav__items");
const auth = document.querySelector("#auth");
const popup = document.querySelector(".popup");
const popUpArea = document.querySelector(".popup__area");
const rules = document.querySelector('#rules')
function show() {
  subNav.classList.toggle("_active");
}
function hide() {
  subNav.classList.remove("_active");
}
function showAuth() {
  popup.classList.add("_active");
}
function authRemove() {
  popup.classList.remove("_active");
}

shop.addEventListener("mouseover", show);

subNav.addEventListener("mouseleave", hide);

auth.addEventListener("click", showAuth);

popUpArea.addEventListener("click", authRemove);


