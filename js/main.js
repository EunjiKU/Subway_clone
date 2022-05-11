let header = document.querySelector('header');
let mainMenu = document.querySelector('.main_menu');
let subMenu = document.querySelectorAll('.sub_menu');

mainMenu.addEventListener('mouseover',function(){
    header.style.height = "414px";
    subMenu.forEach(item => {
        item.style.opacity = 1;
        item.style.top = "60px";
        item.style.visibility = "visible";
    });
});
mainMenu.addEventListener('mouseout',function(){
    header.style.height = "166px";
    subMenu.forEach(item => {
        item.style.opacity = 0;
        item.style.top = "30px";
        item.style.visibility = "hidden";
    });
});