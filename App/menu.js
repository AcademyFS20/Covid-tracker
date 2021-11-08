const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

console.log(hamburger)


hamburger.addEventListener('click',mobileMenu);


function mobileMenu(){

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

}

function closeMenu(){
    hamburger.classList.remove('active');
}

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(item => {

    item.addEventListener('click',closeMenu)
})