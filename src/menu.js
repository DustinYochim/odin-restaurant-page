import MyImage from "./img/menu.jpeg";

export default function loadMenu() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.textContent = "The Krusty Krab";
  content.appendChild(title);

  // add image
  const myImage = new Image();
  myImage.src = MyImage;
  myImage.classList.add("bg");
  content.appendChild(myImage);
}
