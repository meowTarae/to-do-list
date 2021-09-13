const leftSideForm = document.querySelector(".leftSide__form");
const leftSideInput = document.querySelector(".leftSide__form input");
const leftSideToDo = document.querySelector(".leftSide__to-do");
const KEY_TODOS = "user-to-do";
let leftSideArray = [];

leftSideForm.addEventListener("submit", handleUserSubmit);

function handleUserSubmit(event){
    event.preventDefault();
    const myToDo = leftSideInput.value;    
    leftSideInput.value = "";
    leftSideArray.push(myToDo);
    saveToDoOnArray();
    registerTodo(myToDo);
}

function saveToDoOnArray() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(leftSideArray));
}

function registerTodo(myToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = myToDo;
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    leftSideToDo.appendChild(li);
    button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
    const li = event.target.parentElement; 
    // btn의 부모 li를 const li로 지정.
    li.remove();
}

const checkLocalStorage = localStorage.getItem(KEY_TODOS);

if (checkLocalStorage !== null) {
    const parseToDo = JSON.parse(checkLocalStorage);
    leftSideArray = parseToDo;
}
