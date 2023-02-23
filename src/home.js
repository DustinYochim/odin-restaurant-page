import Background from "./img/krusty.jpg";

export default function loadHome() {
  const content = document.querySelector("#content");

  const topNav = document.createElement("div");
  topNav.classList.add("top-nav");
  const home = document.createElement("a");
  home.classList.add("active");
  home.href = "#home";
  home.textContent = "home";
  topNav.appendChild(home);

  const menu = document.createElement("a");
  menu.href = "#menu";
  menu.textContent = "menu";
  topNav.appendChild(menu);

  const contact = document.createElement("a");
  contact.href = "#contact";
  contact.textContent = "contact";
  topNav.appendChild(contact);

  content.appendChild(topNav);
  // add image
  const myBackground = new Image();
  myBackground.src = Background;
  myBackground.classList.add("bg");
  content.appendChild(myBackground);
  // add page title
  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.textContent = "The Krusty Krab";
  content.appendChild(title);

  // add headline
  const headline = document.createElement("div");
  headline.textContent =
    "Our restaurant offers the best burgers in Bikini Bottom, made with fresh and locally sourced ingredients. Our secret recipe has been passed down for generations, and we take pride in serving our customers the finest quality food. In addition to our famous burgers, we also offer a variety of seafood dishes, including our signature Krabby Patties and delicious clam chowder. Our menu is updated seasonally to incorporate the freshest ingredients and provide our customers with new and exciting flavors to try. At the Krusty Krab, we believe that dining out is not just about the food, but also about the experience. Our friendly staff and cozy atmosphere will make you feel right at home. Whether you're looking for a quick bite or a full meal, we've got something for everyone. So come on down to the Krusty Krab and see why we're the talk of Bikini Bottom!";
  headline.classList.add("headline");
  content.appendChild(headline);

  // Add Hours
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  hoursTitle.classList.add("section-title");
  content.appendChild(hoursTitle);

  const hoursList = document.createElement("ul");
  hoursList.classList.add("hours-list");

  const sunday = document.createElement("li");
  sunday.textContent = "Sunday: 8am - 8pm";
  hoursList.appendChild(sunday);

  const monday = document.createElement("li");
  monday.textContent = "Monday: 6am - 6pm";
  hoursList.appendChild(monday);

  const tuesday = document.createElement("li");
  tuesday.textContent = "Tuesday: 6am - 6pm";
  hoursList.appendChild(tuesday);

  const wednesday = document.createElement("li");
  wednesday.textContent = "Wednesday: 6am - 6pm";
  hoursList.appendChild(wednesday);

  const thursday = document.createElement("li");
  thursday.textContent = "Thursday: 6am - 10pm";
  hoursList.appendChild(thursday);

  const friday = document.createElement("li");
  friday.textContent = "Friday: 6am - 10pm";
  hoursList.appendChild(friday);

  const saturday = document.createElement("li");
  saturday.textContent = "Saturday: 8am - 10pm";
  hoursList.appendChild(saturday);

  content.appendChild(hoursList);

  // Add Location
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";
  locationTitle.classList.add("section-title");
  content.appendChild(locationTitle);

  const location = document.createElement("div");
  location.textContent = "831 Bottom Feeder Lane, Bikini Bottom, Pacific Ocean";
  location.classList.add("location");
  content.appendChild(location);

  // Add Footer
  const footer = document.createElement("a");
  footer.classList.add("footer");
  footer.href = "https://github.com/DustinYochim";
  footer.textContent = "Copyright © 2023 Dustin Yochim";

  content.appendChild(footer);
}
