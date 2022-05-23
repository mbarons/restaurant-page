const component = (type, className, id, string) => {
  let element = document.createElement(`${type}`);
  element.classList.add(className);
  element.setAttribute("id", id);
  element.textContent = string;
  return element;
};

const loadImage = (imagevar, className) => {
  const myImg = new Image();
  myImg.src = imagevar;
  myImg.classList.add(className);
  return myImg;
};

export  {
  component,
  loadImage
};