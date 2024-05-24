
/*=============SHOW MENU============*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*--Event for showing menu--*/
navToggle.addEventListener('click',() => {
    navMenu.classList.add('show-menu')
})
/*-----MENU HIDDEN-----*/
navClose.addEventListener('click',() => {
    navMenu.classList.remove('show-menu')
})
/*===========SEARCH========= */
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/*==============SEARCH SHOW============ */
searchBtn.addEventListener('click', () => {
    search.classList.add('show-search')
})
/*==============SEARCH HIDDEN=========== */
searchClose.addEventListener('click', () => {
    search.classList.remove('show-search')
})
/*===============LOGIN============== */
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')
/*----------------LOGIN SHOW------------- */
loginBtn.addEventListener('click', () => {
    login.classList.add('show-login')
})
/*--------LOGIN HIDDEN-------- */
loginClose.addEventListener('click', () => {
    login.classList.remove('show-login')
})
/*------------------ANIMATION SCROLL------------- */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenelement = document.querySelectorAll('.body');
hiddenelement.forEach((el) => observer.observe(el));