const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', (e) => {
    menuButton.classList.toggle('open');
    document.querySelector('#navbar').classList.toggle('open');
})