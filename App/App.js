<<<<<<< HEAD
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
=======
const API_KEY = '';
const endpointWorld = 'https://api.covid19api.com/summary';
const endpointMorocco = 'https://api.covid19api.com/dayone/country/morocco/status/confirmed'
//const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query="';

window.addEventListener('DOMContentLoaded',async() => {
    const dataWord = await getData(endpointWorld);
    console.log(dataWord);
    const dataMorocco = await getData(endpointMorocco);
    console.log(dataMorocco);
    
})

async function getData(url){
    const response = await fetch(url,{
        mathid:'GET',
        headers: {
            'Content-type': 'application/json; charset =utf8'
        }
    })
    
    const data = await response.json();
  
    return data;
}

>>>>>>> branche_oussama
