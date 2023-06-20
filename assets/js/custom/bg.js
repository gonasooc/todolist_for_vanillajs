
const bgImg = document.querySelector('.bg-img');

const imgArr = [
  'https://images.unsplash.com/photo-1686613616585-47f4f74c6ca1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'https://images.unsplash.com/photo-1678200736463-05e3bedd1317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'https://images.unsplash.com/photo-1686129839916-e3b91637a7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
];

function generateRandom() { // 랜덤 숫자 생성
  const number = Math.floor(Math.random() * imgArr.length);
  return number;
}

function paintBg(randomNumber) { // 이미지 소스 변경
  bgImg.src = imgArr[randomNumber];
  bgImg.classList.add('bg-trans'); // fadeIn animation
}

function init() {
  const randomNumber = generateRandom();
  paintBg(randomNumber);
}

init();


// const body = document.querySelector('body');

// const IMG_NUMBER = 5;

// function handleImgLoad(){
//     console.log('finished loading');
// }

// function paintImage(imgNumber){
//     const image = new Image();
//     image.src = `images/${imgNumber + 1}.jpg`;
//     body.appendChild(image);
//     image.addEventListener('loaded', handleImgLoad);
//     image.classList.add('bgImage');
// }

// function genRandom(){
//     const number = Math.floor(Math.random() * 5);
//     return number;
// }

// function init(){
//     const randomNumber = genRandom();
//     paintImage(randomNumber);
// }

// init();