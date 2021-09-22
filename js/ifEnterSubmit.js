// 엔터 눌렀을 때, 왼쪽 화면에 toDo가 나타나게끔만.

const leftSideForm = document.querySelector(".leftSide__form");
const leftSideInput = document.querySelector(".leftSide__form input");
const leftSideToDo = document.querySelector(".leftSide__to-do");

const TODOS_KEY = "toDos";
let leftSideArray = [];

leftSideForm.addEventListener("submit", handleUserSubmit);
// 유저가 할일 넣고 엔터 누르면~

function handleUserSubmit(event) {
    event.preventDefault();
    const myToDo = leftSideInput.value;
    leftSideInput.value = "";    
    const myToDoObj = {
        text: myToDo,
        id: Date.now(),
    };
    leftSideArray.push(myToDoObj);
    saveMyToDo();
    paintToDo(myToDoObj);
}

function saveMyToDo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(leftSideArray));
}

function paintToDo(myToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const complBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    li.appendChild(span);
    li.appendChild(complBtn);
    li.appendChild(delBtn);
    leftSideToDo.appendChild(li);
    span.innerText = myToDoObj.text;
    complBtn.innerText = "✔️";
    delBtn.innerText = "❌";
    li.id = myToDoObj.id;

    span.classList.add("toDoSpan");
    complBtn.classList.add("complBtn", "hidden");
    delBtn.classList.add("delBtn", "hidden");
    // css작업을 위해 두 btn들에게 id를 넣어 줌.

    complBtn.addEventListener("click", complTodo);
    delBtn.addEventListener("click", leftSideDeleteTodo);
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parseToDo = JSON.parse(savedToDos);
    leftSideArray = parseToDo;
    parseToDo.forEach(paintToDo);
}


 

