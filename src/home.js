import { component, loadImage }  from './page-load';

let homepage = () => {
  let content = component("div", "home-content");
  content.appendChild(component("div", "home-text", "", "Best Burger in Town!"));
  content.appendChild(component("div", "home-text", "", "Made with love since 2003"));
  content.appendChild(component("div", "rounded-image"));
  content.appendChild(component("div", "home-text", "", "Order online or visit us!"));

  return content;
};

export default homepage;


