//Change navbar expanded bg color
var navbar = document.getElementsByClassName("navbar navbar-expand-md fixed-top")[0];
var toggleButton = document.getElementsByClassName("navbar-toggler")[0];
toggleButton.addEventListener('click', () => {
    navbar.classList.toggle("nav-expanded");
})