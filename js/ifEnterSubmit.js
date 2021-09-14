const leftSideForm = document.querySelector(".leftSide__form");
const leftSideInput = document.querySelector(".leftSide__form input");
const leftSideToDo = document.querySelector(".leftSide__to-do");


const KEY_TODOS = "toDos";
let leftSideArray = [];

leftSideForm.addEventListener("submit", handleUserSubmit);
// 유저가 할일 넣고 엔터 누르면~

function handleUserSubmit(event) {
    event.preventDefault();
    const myToDo = leftSideInput.value;
    leftSideInput.value = "";
    leftSideArray.push(myToDo);
    saveMyToDo();
    paintToDo(myToDo);
}

function saveMyToDo() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(leftSideArray));
}

function paintToDo(event) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    leftSideToDo.appendChild(li);
    span.innerText = event;
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();  
}

const savedToDos = localStorage.getItem(KEY_TODOS);

if (savedToDos !== null) {
    const parseToDo = JSON.parse(savedToDos);
    leftSideArray = parseToDo;
    parseToDo.forEach(paintToDo);
    // F5눌러도 값이 남아있게 해줌
}




-0914
const myToDoObj = {
    text: myToDo,
    id: Date.now(),
};

Date.now()로 id 부여해서 li에 등록하자.
등록을 위해 함수들 간단하게 수정
 

