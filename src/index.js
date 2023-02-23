import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./reset.css";
import "./style.css";

loadHome();

const home = document.querySelector('[href="#home"]');
home.addEventListener("click", loadHome());

const menu = document.querySelector('[href="#menu"]');
menu.addEventListener("click", loadMenu());

const contact = document.querySelector('[href="#contact"]');
contact.addEventListener("click", loadContact());
