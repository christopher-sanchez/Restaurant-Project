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

document.getElementById("about-btn")
    .addEventListener("click", () =>{
        clearContent();
        loadAbout();
    });
    loadHome();

    console.log("running");