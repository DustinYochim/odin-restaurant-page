import Krabs from "./img/krabs.jpg";
import Squidward from "./img/squidward.jpg";
import Spongebob from "./img/spongebob.jpeg";

export default function loadMenu() {
  const content = document.querySelector("#content");

  const title = document.createElement("h1");
  title.classList.add("page-title");
  title.textContent = "The Krusty Krab";
  content.appendChild(title);

  const contactTitle = document.createElement("h2");
  contactTitle.classList.add("section-title");
  contactTitle.textContent = "Contact Us";
  content.appendChild(contactTitle);

  const mrKrabs = document.createElement("div");
  mrKrabs.classList.add("contact-card");

  const mrKrabsName = document.createElement("div");
  mrKrabsName.classList.add("contact-name");
  mrKrabsName.textContent = "Eugene H. Krabs";
  mrKrabs.appendChild(mrKrabsName);

  const krabs = new Image();
  krabs.src = Krabs;
  krabs.classList.add("contact-picture");
  mrKrabs.appendChild(krabs);

  const mrKrabsTitle = document.createElement("div");
  mrKrabsTitle.classList.add("contact-title");
  mrKrabsTitle.textContent = "Owner";
  mrKrabs.appendChild(mrKrabsTitle);

  const mrKrabsPhone = document.createElement("div");
  mrKrabsPhone.classList.add("contact-title");
  mrKrabsPhone.textContent = "$$$-$$$-$$$$";
  mrKrabs.appendChild(mrKrabsPhone);

  const mrKrabsEmail = document.createElement("div");
  mrKrabsEmail.classList.add("contact-email");
  mrKrabsEmail.textContent = "moneyMoneyMoney@money.com";
  mrKrabs.appendChild(mrKrabsEmail);

  content.appendChild(mrKrabs);

  const squidward = document.createElement("div");
  squidward.classList.add("contact-card");

  const squidwardName = document.createElement("div");
  squidwardName.classList.add("contact-name");
  squidwardName.textContent = "Squidward Tentacles";
  squidward.appendChild(squidwardName);

  const squidwardImg = new Image();
  squidwardImg.src = Squidward;
  squidwardImg.classList.add("contact-picture");
  squidward.appendChild(squidwardImg);

  const squidwardTitle = document.createElement("div");
  squidwardTitle.classList.add("contact-title");
  squidwardTitle.textContent = "Cashier";
  squidward.appendChild(squidwardTitle);

  const squidwardPhone = document.createElement("div");
  squidwardPhone.classList.add("contact-title");
  squidwardPhone.textContent = "867-5309";
  squidward.appendChild(squidwardPhone);

  const squidwardEmail = document.createElement("div");
  squidwardEmail.classList.add("contact-email");
  squidwardEmail.textContent = "dontEmailMe@leaveMeAlone.com";
  squidward.appendChild(squidwardEmail);

  content.appendChild(squidward);

  const spongebob = document.createElement("div");
  spongebob.classList.add("contact-card");

  const spongeName = document.createElement("div");
  spongeName.classList.add("contact-name");
  spongeName.textContent = "Spongebob Squarepants";
  spongebob.appendChild(spongeName);

  const spongeImage = new Image();
  spongeImage.src = Spongebob;
  spongeImage.classList.add("contact-picture");
  spongebob.appendChild(spongeImage);

  const spongeTitle = document.createElement("div");
  spongeTitle.classList.add("contact-title");
  spongeTitle.textContent = "Chef";
  spongebob.appendChild(spongeTitle);

  const spongePhone = document.createElement("div");
  spongePhone.classList.add("contact-title");
  spongePhone.textContent = "555-5555";
  spongebob.appendChild(spongePhone);

  const spongeEmail = document.createElement("div");
  spongeEmail.classList.add("contact-email");
  spongeEmail.textContent = "spongebob@bikinibottom.com";
  spongebob.appendChild(spongeEmail);

  content.appendChild(spongebob);
}
