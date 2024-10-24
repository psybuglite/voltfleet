// Navigation Menu

var mobileNav = document.querySelector(".mobile-nav");
var button = document.querySelector(".menu-button");

function showmenu() {
  mobileNav.classList.toggle("open");
}

button.addEventListener("click", showmenu);

function myFunction(x) {
  x.classList.toggle("change");
}


// Scroll event for the navigation

var navbar = document.querySelector('nav')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.scrollY > 180) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}


// Modal interaction

var modal = document.getElementById("quoteModal");
var btn = document.getElementById("quote");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}