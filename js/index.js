const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick(){
    // const currentClass = title.className;
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // // console.log(currentClass);
    // if(hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else{
    //     title.classList.add(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}

init();



