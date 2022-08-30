
import { iceCreamList } from "./iceCream.js";
import { cookiesToHTML } from "./cookies.js";






// Adds all cookies to their section inindex.html
const parentCookiesElement = document.querySelector("#cookies-section");
parentCookiesElement.innerHTML += cookiesToHTML();

// Adds all html elements for ice cream objects
const iceCreamHTMLElement = document.querySelector("#ice-cream-section")

iceCreamHTMLElement.innerHTML += iceCreamList();
