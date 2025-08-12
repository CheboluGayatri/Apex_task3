// Show alert
function showAlert() {
    alert("Hello! You clicked the button.");
}

// Navigation tab switching
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        sections.forEach(sec => sec.classList.remove("active"));
        const targetId = link.getAttribute("href").substring(1);
        document.getElementById(targetId).classList.add("active");
    });
});
if (sections.length > 0) {
    sections[0].classList.add("active");
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (!name || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    this.reset();
});

// To-Do List functionality
document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value.trim();
    let taskList = document.getElementById("taskList");
    if (!taskValue) return;
    let li = document.createElement("li");
    li.textContent = taskValue;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => taskList.removeChild(li);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});

// Image Carousel
const carouselImages = ["images/html.jpg", "images/css.jpg", "images/js.jpg"];
let currentIndex = 0;
const carouselImage = document.getElementById("carouselImage");

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    carouselImage.src = carouselImages[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    carouselImage.src = carouselImages[currentIndex];
});

// API Fetch - Joke Generator
document.getElementById("loadJokeBtn").addEventListener("click", async () => {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = "Loading joke...";
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await response.json();
        jokeElement.textContent = `${data.setup} - ${data.punchline}`;
    } catch (error) {
        jokeElement.textContent = "Failed to load joke.";
    }
});
