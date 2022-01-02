let menu = document.getElementById('menu-btn');
let header = document.getElementById('header');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');

});