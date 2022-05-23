import { component, loadImage } from './page-load';
import bacon from './bacon.jpg';
import chicken from './chicken.jpg';
import classic from './classic.jpg';
import egg from './egg.jpg';
import onion from './onionrings.jpg';
import triple from './triple.jpg';

let menupage = () => {
  let content = component("div", "menu-content");
  let menuArray = [
   component("div", "menu-container", "menu1"),
   component("div", "menu-container", "menu2"), 
   component("div", "menu-container", "menu3"),
   component("div", "menu-container", "menu4"),
   component("div", "menu-container", "menu5"),
   component("div", "menu-container", "menu6")
   ];

  
  menuArray[0].innerHTML = `<img src='${bacon}' class='menu-img'> <div class='menu-title'>Bacon</div> <div class='menu-text'> Bacon, mayonnaise, bread, burger, onions, cheese</div>`;
  menuArray[1].innerHTML = `<img src='${chicken}'class='menu-img'> <div class='menu-title'>Chicken</div> <div class='menu-text'> Bread, chicken burger, cheese, lettuce</div>`;
  menuArray[2].innerHTML = `<img src='${classic}' class='menu-img'><div class='menu-title'>Classic</div> <div class='menu-text'> Bread, burger, onions, cheese, lettuce, tomato, pickles</div>`;
  menuArray[3].innerHTML = `<img src='${egg}'class='menu-img'> <div class='menu-title'>Egg</div> <div class='menu-text'> Bacon, fried egg, bread, burger, cheese</div>`;
  menuArray[4].innerHTML = `<img src='${onion}' class='menu-img'><div class='menu-title'>Onion</div> <div class='menu-text'> Onion rings, bread, burger, cheese, mayonnaise</div>`;
  menuArray[5].innerHTML = `<img src='${triple}'class='menu-img'> <div class='menu-title'>Triple</div> <div class='menu-text'> Bacon, bread, triple burger, onions, mayonnaise, cheese</div>`;

  content.appendChild(menuArray[0]);
  content.appendChild(menuArray[1]);
  content.appendChild(menuArray[2]);
  content.appendChild(menuArray[3]);
  content.appendChild(menuArray[4]);
  content.appendChild(menuArray[5]);

  

  //content.appendChild(loadImage(chicken, "menu-img"));
  return content;
};

export default menupage;


