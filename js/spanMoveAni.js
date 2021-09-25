const span = document.querySelector(".toDoSpan");
const MOVE_LEFT = "moveLeft";
const MOVE_RIGHT = "moveRight";

span.addEventListener("click", clickText);

function clickText(e) {
    const li = e.target.parentElement; 
    // li = click한 span의 부모 li
    if (li.classList.contains(MOVE_LEFT) == true) {        
        li.classList.toggle(MOVE_LEFT);
        li.classList.toggle(MOVE_RIGHT);                
    }
    else {
        li.classList.add(MOVE_LEFT);
        li.classList.remove(MOVE_RIGHT);
    }
    // li.classList.remove(MOVE_RIGHT);
}

