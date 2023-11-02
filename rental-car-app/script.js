const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('navbar');

const themeButton = document.getElementById('themeButton');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
}

if(storedTheme==="light") {
    sun.classList.add('disabled');
}else{
    moon.classList.add('disabled');
}

themeButton.addEventListener('click', () => {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "dark";

    if (currentTheme === "dark") {
        targetTheme = "light";
        moon.classList.remove('disabled');
        sun.classList.add('disabled')
    }else{
        moon.classList.add('disabled');
        sun.classList.remove('disabled');
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
});
