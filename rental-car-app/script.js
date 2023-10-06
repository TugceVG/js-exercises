const toggleButton = document.getElementById('toggle-button');
const navbar = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});