const rightSideComplList = document.querySelector(".rightSide__complList");
const COMPLETETODO_KEY = "completeToDo";
let rightSideArray = [];

function complTodo(event) {    
    const complLi = event.target.parentElement;
    const registeComplToDo = {
        text: complLi.firstChild.innerText,
        id: complLi.id,
    };
    rightSideArray.push(registeComplToDo);

    saveComplToDo();
    paintComplToDo(registeComplToDo);
    leftSideDeleteTodo(event);
}

function saveComplToDo() {
    localStorage.setItem(COMPLETETODO_KEY, JSON.stringify(rightSideArray));
}

function paintComplToDo(toDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div = document.createElement("div");

    div.appendChild(span);
    li.appendChild(div);
    rightSideComplList.appendChild(li);

    li.id = toDo.id;
    span.innerText = toDo.text;
    div.classList.add("complDiv");
    
    div.addEventListener("click", rightSideDeleteTodo);
}


const savedComplToDo = localStorage.getItem(COMPLETETODO_KEY);

if (savedComplToDo !== null) {
    const parseComplToDo = JSON.parse(savedComplToDo);
    rightSideArray = parseComplToDo ;
    parseComplToDo.forEach(paintComplToDo);
}