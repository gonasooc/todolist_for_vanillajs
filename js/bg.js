const body = document.querySelector('body');

const IMG_NUMBER = 5;

function handleImgLoad(){
    console.log('finished loading');
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.addEventListener('loaded', handleImgLoad);
    image.classList.add('bgImage');
}

function genRandom(){
    const number = Math.floor(Math.random() * 5);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();