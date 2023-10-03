const toggleButton = document.getElementById('menu-icon');
const navbar = document.getElementById('nav');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
})