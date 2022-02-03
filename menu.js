const html = document.documentElement;
const menu = document.getElementById('nav');
console.log(menu);
function openMenu(){
    //add class to the menu to make it show
    menu.classList.add('nav-wrapper');
    //add event listener to the html element
    html.addEventListener('click', closeMenuOnBodyClick);
}

function closeMenu(){
    //add class to the menu to make it dissapear
    menu.classList.remove('nav-wrapper');
    //add event listener to the html element
    html.removeEventListener('click', closeMenuOnBodyClick);
}

function closeMenuOnBodyClick(event){
    //get the event path
    const path = event.composedPath();
    //check if it has the menu element
    if(path.some(elem => elem.id === 'nav')){
        //terminate this function if it does
        return;
    }
    closeMenu();
}