import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.getElementById("content");

function clearContent() {
    content.innerHTML = "";
}

document.getElementById("home-btn")
    .addEventListener("click", () => {
        clearContent();
        loadHome();
    });

document.getElementById("menu-btn")
    .addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    loadHome();


