let hamburgerElem = document.getElementById("hamburger");
let navElem = document.getElementById("mobile-menu");

hamburgerElem.addEventListener("click", function()
{
    navElem.classList.toggle("active")
    hamburgerElem.classList.toggle("fa-times");
})