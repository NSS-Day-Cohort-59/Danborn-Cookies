import { cookiesToHTML } from "./cookies.js";


// Adds all cookies to their section inindex.html
const parentCookiesElement = document.querySelector("#cookies-section");
parentCookiesElement.innerHTML += cookiesToHTML();
console.log(parentCookiesElement.innerHTML);