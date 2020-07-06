const btnOpen = document.querySelector('.icon-menu');
const btnClose = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');


btnOpen.addEventListener('click', () => {
    menu.classList.add('show-menu');
})
btnClose.addEventListener('click', () => {
    menu.classList.remove('show-menu');
})