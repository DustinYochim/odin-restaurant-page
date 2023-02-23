export default function renderNav() {
  const topNav = document.createElement("div");
  topNav.classList.add("top-nav");
  const home = document.createElement("a");
  home.setAttribute("id", "home");
  home.textContent = "home";
  topNav.appendChild(home);

  const menu = document.createElement("a");

  menu.textContent = "menu";
  menu.setAttribute("id", "menu");
  topNav.appendChild(menu);

  const contact = document.createElement("a");
  contact.setAttribute("id", "contact");
  contact.textContent = "contact";
  topNav.appendChild(contact);

  document.body.appendChild(topNav);
}
