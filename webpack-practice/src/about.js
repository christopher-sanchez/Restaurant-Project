export default function loadAbout() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Ouur restrant is all good stuff ";

    const description = document.createElement("p");
    description.textContent = " 100% real food we promise!";

    content.appendChild(heading);
    content.appendChild(description);
}