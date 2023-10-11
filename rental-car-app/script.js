const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar');
const bulbButton = document.getElementById('bulbButton');
const bulb = document.getElementById('bulb');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
}

bulbButton.addEventListener('click', () => {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
    bulb.classList.toggle('dark');
});
