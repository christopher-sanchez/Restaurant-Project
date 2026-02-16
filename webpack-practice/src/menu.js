export default function loadMenu() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "This is our Menu!";

    const description = document.createElement("p");
    description.textContent = "WOW SO GOOOD!";
    content.appendChild(heading);
    content.appendChild(description);
}