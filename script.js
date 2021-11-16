//Making navbar opaque while scrolling


//Change navbar expanded bg color
var navbar = document.getElementsByClassName("navbar navbar-expand-sm fixed-top")[0];
var toggleButton = document.getElementsByClassName("navbar-toggler")[0];
toggleButton.addEventListener('click', ()=> {
    navbar.classList.toggle("nav-expanded");
    console.log('click');
})


//Panoramic Diaporama
var nextButton = document.getElementsByClassName("carousel-control-next revolution-next")[0];
setInterval(()=>nextButton.click(), 20000);
