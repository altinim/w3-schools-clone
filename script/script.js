const switchThemeButton = document.getElementById("switch-theme");
const body = document.body;

function toggleTheme() {
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }
}

async function loadHeader() {
    try {
        const response = await fetch("../layout/header.html");

        if (!response.ok) throw new Error("Failed to fetch header");

        const headerContent = await response.text();
        const header = document.querySelector("#header");

        if (header) {
            header.innerHTML = headerContent;
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    loadHeader();
});
