var hamburgerButton = document.getElementById('hamburger');
var menu = document.getElementById('menu');



hamburgerButton.addEventListener('click', () => {
    if(menu.style.display=='flex'){
        menu.style.display = 'none'
    } else{
        menu.style.display='flex'
    }
})
window.addEventListener('resize', () => {
    if(window.innerWidth > 480)
    menu.style.display='flex'
    else{
        menu.style.display='none'
    }
});
