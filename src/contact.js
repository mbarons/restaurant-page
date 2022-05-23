import { component, loadImage }  from './page-load';
import map from './restaurant-location.png';

let contactpage = () => {
  let content = component("div", "contact-content");
  content.appendChild(component("div", "contact-text", "",  "📞 123 456 789"));
  content.appendChild(component("div", "contact-text", "", "📍 Hollywood Boulevard 42, Los Angeles, USA"));
  let myMap = loadImage(map, "map-image")
  content.appendChild(myMap);

  return content;
};

export default contactpage;