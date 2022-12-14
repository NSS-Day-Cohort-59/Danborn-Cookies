import { getCookies } from "./database.js";

//Returns an html string of all ice cream 
export const cookiesToHTML = () => {
    const cookies = getCookies();
    let cookieHTML = "";
    
    for (const cookieObj of cookies) {
        cookieHTML += `  <div id="cookie-${cookieObj.id}" class="cookie-column">
      <img class="food-img" alt="Food Image" src="${cookieObj.img}">
      <div class="description-div">
        <h3 class="food-name cookie-flavor">${cookieObj.name}</h3>
        <p class="food-description">${cookieObj.description}</p>
      </div>
    </div>\n`
    }
    return cookieHTML;
}

