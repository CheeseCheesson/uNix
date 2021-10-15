const shop = document.querySelector("#shop");
const subNav = document.querySelector(".sub-nav__items");
const auth = document.querySelector("#auth");
const popup = document.querySelector(".popup");
const popUpArea = document.querySelector(".popup__area");
const rules = document.querySelector("#rules");
const rule = document.querySelector(".rule");
const statistic = document.querySelector(".statistic");
const statBnt = document.querySelector(".stat");
const nav = document.querySelector('.nav')
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
function showRules() {
  rule.classList.toggle("_active");
}
function removeRules() {
  rule.classList.remove("_active");
}
function showStat() {
  statistic.classList.toggle("_active");
}
function hideStat() {
  statistic.classList.remove("_active");
}
shop.addEventListener("mouseover", show);
subNav.addEventListener("mouseleave", hide);
auth.addEventListener("click", showAuth);
popUpArea.addEventListener("click", authRemove);
rules.addEventListener("mouseover", hide);
rules.addEventListener("mouseover", showRules);
rule.addEventListener("mouseleave", removeRules);
shop.addEventListener("mouseover", removeRules);
rules.addEventListener("mouseover", hideStat);
statBnt.addEventListener("mouseover", removeRules);
shop.addEventListener("mouseover", hideStat);

statBnt.addEventListener("mouseover", showStat);
statistic.addEventListener("mouseleave", hideStat);

nav.addEventListener("mouseleave", hide)
nav.addEventListener("mouseleave", authRemove)
nav.addEventListener("mouseleave", removeRules)
nav.addEventListener("mouseleave", hideStat)