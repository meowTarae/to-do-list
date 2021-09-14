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
    const myToDoObj = {
        text: myToDo,
        id: Date.now(),
    };
    leftSideArray.push(myToDoObj);
    saveMyToDo();
    paintToDo(myToDoObj);
}

function saveMyToDo() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(leftSideArray));
}

function paintToDo(myToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.appendChild(span);
    li.appendChild(button);
    leftSideToDo.appendChild(li);
    span.innerText = myToDoObj.text;
    button.innerText = "❌";
    li.id = myToDoObj.id;
    button.addEventListener("click", deleteTodo);
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();  
    console.log(li.id);
    // 삭제 버튼을 누를 시, 그 li의 id값을 확인할 수 있네!
}

const savedToDos = localStorage.getItem(KEY_TODOS);

if (savedToDos !== null) {
    const parseToDo = JSON.parse(savedToDos);
    leftSideArray = parseToDo;
    parseToDo.forEach(paintToDo);
    // F5눌러도 값이 남아있게 해줌
}




 

