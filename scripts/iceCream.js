import { getIceCream } from "./database.js";


export const iceCreamList = () => {
  const iceCreamArr = getIceCream();

  let htmlString = ``;

  for(const iceCream of iceCreamArr) {
    htmlString += `<div id="${iceCream.id}"class="food-column" class="ice-cream-column">
    <img class="food-img" alt="Food Image" src="${iceCream.img}">
    <div class="description-div">
      <h3 class="food-name">${iceCream.name}</h3>
      <p class="food-description">${iceCream.description}</p>
    </div>
  </div>`
  }
  return htmlString;
}