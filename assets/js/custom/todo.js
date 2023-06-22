const todoList = document.querySelector('#todoList');
const todoInput = document.querySelector('#todoInput');

function addTodo() { // 투두 추가
  if (todoInput.value) {
    let $div = document.createElement('div');
    $div.innerHTML = `
    <div class="todo-list-output-list">
      <div class="todo-list-output-left-grp">
        <div class="todo-list-output-check-grp">
          <input class="checkInput" type="checkbox">
        </div>
        <div class="todo-list-output-txt-grp">
          <p class="todo-list-output-txt">${todoInput.value}</p>
        </div>
      </div>
      <div class="todo-list-output-right-grp">
        <div class="todo-list-output-btn-grp">
          <button class="denBtn" type="button"><i class="icon icon-del"></i></button>
        </div>
      </div>
    </div>`
    todoList.append($div);
    todoInput.value = '';
    checkTodo();
    delTodo();
  } else {
    alert('오늘 할일을 입력해주세요 :)')
  }
}

function delTodo() { // 투두 삭제
  let denBtn = document.querySelectorAll('.denBtn');
  for (let i = 0; i < denBtn.length; i++) {
    denBtn[i].addEventListener('click', (e) => {
      const list = e.target.parentElement.parentElement.parentElement.parentElement;
      console.log(list);
      list.remove();
    })
  }
}

function checkTodo() { // 투두 체크
  let checkInput = document.querySelectorAll('.checkInput');
  let todoListOutputList = document.querySelectorAll('.todo-list-output-list');

  for (let i = 0; i < checkInput.length; i++) {
    checkInput[i].addEventListener('click', (e) => {
      console.log(e.target.checked);
      if (e.target.checked) {
        todoListOutputList[i].classList.add('is-checked');
      } else {
        todoListOutputList[i].classList.remove('is-checked');
      }
    })
  }
}

todoInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    addTodo();
  }
})