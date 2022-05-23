import './style.css';
import { component, loadImage } from './page-load';
import homepage from './home';
import contactpage from './contact';
import menupage from './menu';

let contentContainer = document.querySelector("#content");

contentContainer.appendChild(component("div", "header"));
let header = document.querySelector(".header");
header.appendChild(component("button", "header-sub","home", "Home"));
header.appendChild(component("button", "header-sub", "menu", "Menu"));
header.appendChild(component("button", "header-sub","contact", "Contact"));

contentContainer.appendChild(component("div", "main-container"));
contentContainer.appendChild(component("div", "footer", "", "Copyright © 2021 marcobaron"));

let mainContainer = document.querySelector(".main-container");
let homepageContent = homepage()
let contactpageContent = contactpage();
let menupageContent = menupage();

mainContainer.appendChild(homepageContent);


let contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
  mainContainer.removeChild(mainContainer.lastChild);
  mainContainer.appendChild(contactpageContent);
});
contactButton.addEventListener("mouseenter", (e) => {
  contactButton.classList.add("hover");
});
contactButton.addEventListener("mouseleave", (e) => {
  contactButton.classList.remove("hover");
});

let homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
  mainContainer.removeChild(mainContainer.lastChild);
  mainContainer.appendChild(homepageContent);
});
homeButton.addEventListener("mouseenter", (e) => {
  homeButton.classList.add("hover");
});
homeButton.addEventListener("mouseleave", (e) => {
  homeButton.classList.remove("hover");
});

let menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", () => {
  mainContainer.removeChild(mainContainer.lastChild);
  mainContainer.appendChild(menupageContent);
})
menuButton.addEventListener("mouseenter", (e) => {
  menuButton.classList.add("hover");
});
menuButton.addEventListener("mouseleave", (e) => {
  menuButton.classList.remove("hover");
});

export default {mainContainer};