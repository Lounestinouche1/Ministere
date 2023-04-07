let menu = document.querySelector('.menu-bars');
 let navbar = document.querySelector('.navbar');
menu.onclick = function myfunction() {
    
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    navbar.classList.toggle('active');
} 

window.onscroll =  function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 

document.querySelector('.search-icon').onclick = function myfunction2() {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = function myfunction2(){
    document.querySelector('#search-form').classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});