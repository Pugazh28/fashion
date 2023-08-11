let menuIcon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('move');
  navbar.classList.toggle('open-menu');
}
//Swiper
var swiper = new Swiper(".services-content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//Header
let header =document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow",window.scrollY > 0);
})
//register name
let userName = document.querySelector(".user");

document.querySelector('#register').onclick = () => {
  userName.classList.toggle('active');
  booking.classList.remove('active')
}
//booking cart 
let booking = document.querySelector(".booking-box");

document.querySelector("#booking").onclick  = () =>{
  booking.classList.toggle("active");
  userName.classList.remove("active");
}
//window scroll 
window.onscroll= () => {
  userName.classList.remove("active");
  booking.classList.remove("active")
}
//loader
onload = () => {
  const load = document.getElementById('loader')

  setTimeout(() => {
    load.style.display ="none";
  },2500);
}