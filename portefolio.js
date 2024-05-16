

// logique pour appaitre le bouton toogle en mode ecran reduis
document.addEventListener("click", openNavMobile);
function openNavMobile(event){
    const mobileNavElment = event.target.closest('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');
    if(mobileNavElment){
    navbar.classList.toggle('navbar-mobile');
        mobileNavElment.classList.toggle('bi-list');
        mobileNavElment.classList.toggle('bi-x');
    }
}
document.addEventListener("click", closeNavMobile);
function closeNavMobile(event){
    const target = event.target.closest('.scrollto');
    const navbar = document.querySelector('#navbar');
    const elementhashtag =  document.querySelector(target.hash);

    if(target && elementhashtag){
        event.preventDefault();
        if(navbar.classList.contains('nav-mobile')){
            navbar.classList.remove('nav-mobile');
            const navbarToggle = document.querySelector('.mobile-nav-toggle');
            navbarToggle.classList.toggle('bi-list');
            navbarToggle.classList.toggle('bi-x');
        }
        scrollTo(target.hash);
    }
    true;
}