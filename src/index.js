import renderNav from "./navbar";
// import renderFooter from "./footer";
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
import "./reset.css";
import "./style.css";

function cacheDOM() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
}

cacheDOM();
renderNav();
renderHome();
// renderFooter();

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

home.addEventListener("click", () => {
  cacheDOM();
  renderHome();
});

menu.addEventListener("click", () => {
  cacheDOM();
  renderMenu();
});

contact.addEventListener("click", () => {
  cacheDOM();
  renderContact();
});
