// 엔터 눌렀을 때, 왼쪽 화면에 toDo가 나타나게끔만.

const leftSideForm = document.querySelector(".leftSide__form");
const leftSideInput = document.querySelector(".leftSide__form input");
const leftSideToDo = document.querySelector(".leftSide__to-do");

const TODOS_KEY = "toDos";
const TODODIV = "toDoDiv";

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
    const div = document.createElement("div");
    const complBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    div.appendChild(span);
    li.appendChild(div);
    li.appendChild(complBtn);
    li.appendChild(delBtn);
    leftSideToDo.appendChild(li);
    span.innerText = myToDoObj.text;
    complBtn.innerText = "✔️";
    delBtn.innerText = "❌";
    li.id = myToDoObj.id;

    div.classList.add(TODODIV);
    span.classList.add("toDoSpan");
    complBtn.classList.add("complBtn", "hidden");
    delBtn.classList.add("delBtn", "hidden");
        
    div.addEventListener("click", hi);
    complBtn.addEventListener("click", complTodo);
    delBtn.addEventListener("click", leftSideDeleteTodo);
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parseToDo = JSON.parse(savedToDos);
    leftSideArray = parseToDo;
    parseToDo.forEach(paintToDo);
}

function hi(e) {
    // div.classList.toggle("moveLeft");
    console.log(e.target.parentElement.parentElement.id);
}



// 1. 클릭한 div를 함수로 이동시킨다.
// 2. div의 id를 얻는다.
// 3. 얻어낸 id의 div를 움직인다.


// const clickedDiv = document.createElement("div");
// clickedDiv.onClick = function () {
//     console.log("hello");
// }


// localStorage 값은 문자화되어있으니
// const a = JSON.parse(localStorage.getItem(TODOS_KEY));
// 를 하면 쓸 수 있을거같아.


// 아니면 document에 onclick 옵션을 넣어보자
// 참고 링크 -> https://zetawiki.com/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8_onclick_%EC%9D%B4%EB%B2%A4%ED%8A%B8 


// const btn = document.querySelector("~~");
// btn.onClick = cc;
// function cc () {~~};
