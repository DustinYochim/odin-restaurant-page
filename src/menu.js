import MyImage from "./img/menu.jpeg";

export default function loadMenu() {
  const content = document.querySelector("#content");

  const topNav = document.createElement("div");
  topNav.classList.add("top-nav");
  const home = document.createElement("a");

  home.href = "#home";
  home.textContent = "home";
  topNav.appendChild(home);

  const menu = document.createElement("a");
  menu.classList.add("active");
  menu.href = "#menu";
  menu.textContent = "menu";
  topNav.appendChild(menu);

  const contact = document.createElement("a");
  contact.href = "#contact";
  contact.textContent = "contact";
  topNav.appendChild(contact);

  content.appendChild(topNav);

  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.textContent = "The Krusty Krab";
  content.appendChild(title);

  // add image
  const myImage = new Image();
  myImage.src = MyImage;
  myImage.classList.add("bg");
  content.appendChild(myImage);

  // Add Footer
  const footer = document.createElement("a");
  footer.classList.add("footer");
  footer.href = "https://github.com/DustinYochim";
  footer.textContent = "Copyright © 2023 Dustin Yochim";

  content.appendChild(footer);
}
