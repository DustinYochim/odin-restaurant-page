// Add Footer
export default function renderFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "Copyright © 2023 Dustin Yochim";
  document.body.appendChild(footer);
}
