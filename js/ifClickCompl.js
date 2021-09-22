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
    console.log(rightSideArray);
}

function paintComplToDo(toDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    rightSideComplList.appendChild(li);

    li.id = toDo.id;
    span.innerText = toDo.text;

    span.addEventListener("click", rightSideDeleteTodo);
}


const savedComplToDo = localStorage.getItem(COMPLETETODO_KEY);

if (savedComplToDo !== null) {
    const parseComplToDo = JSON.parse(savedComplToDo);
    rightSideArray = parseComplToDo ;
    parseComplToDo.forEach(paintComplToDo);
}