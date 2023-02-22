export default function pageLoad() {
  // add page title
  const content = document.querySelector("#content");
  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.textContent = "The Krusty Krab";
  content.appendChild(title);
  // add image
  const bg = document.createElement("img");
  bg.src = "../img/krusty-krab.jpg";
  bg.classList.add("bg");
  content.appendChild(bg);
  // add headline
  const headline = document.createElement("div");
  headline.textContent =
    "Welcome to the Krusty Krab! Our restaurant offers the best burgers in Bikini Bottom, made with fresh and locally sourced ingredients. Our secret recipe has been passed down for generations, and we take pride in serving our customers the finest quality food. In addition to our famous burgers, we also offer a variety of seafood dishes, including our signature Krabby Patties and delicious clam chowder. Our menu is updated seasonally to incorporate the freshest ingredients and provide our customers with new and exciting flavors to try. At the Krusty Krab, we believe that dining out is not just about the food, but also about the experience. Our friendly staff and cozy atmosphere will make you feel right at home. Whether you're looking for a quick bite or a full meal, we've got something for everyone. So come on down to the Krusty Krab and see why we're the talk of Bikini Bottom!";
  headline.classList.add("headline");
  content.appendChild(headline);
}
