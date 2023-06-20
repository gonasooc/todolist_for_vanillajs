const userNameInput = document.querySelector('#userNameInput');
const helloWrap = document.querySelector('#helloWrap');
const helloTxt = document.querySelector('#helloTxt');
const helloName = document.querySelector('#helloName');
const helloMsg = ["Hi", "Hello", "Sup", "Hiya", "G'day"];

// let userName = '';


// userNameInput.addEventListener('change', (e) => {
//   userName = e.target.value;
// });

userNameInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    if (e.target.value) {
      helloName.innerText = e.target.value;
      helloWrap.classList.add('is-saved'); // 입력값 있으면 input 감춤
    } else {
      alert('이름을 입력해주세요');
    }
  }
})

function putRandomTxt() { // 인사말 랜덤 삽입
  const number = Math.floor(Math.random() * helloMsg.length);
  helloTxt.innerText = helloMsg[number];
}

function init() {
  putRandomTxt();
}

init();