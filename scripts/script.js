// JavaScript Document
console.log("hi");

// Hamburger menu bron: les oefening hamburger menu en studentassistent

let menuButton = document.querySelector("header > button");
let deNav = document.querySelector("header nav:nth-of-type(2)");

menuButton.addEventListener("click", toggleButton)

function toggleButton() {
  deNav.classList.toggle("is-open")
  menuButton.classList.toggle("is-open")
}