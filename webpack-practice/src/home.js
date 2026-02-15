export default function loadHome() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Our Restaurant!";

    const description = document.createElement("p");
    description.textContent = "Experience the finest dining with our exquisite menu and exceptional service. Join us for an unforgettable culinary journey!";

    content.appendChild(heading);
    content.appendChild(description);
}