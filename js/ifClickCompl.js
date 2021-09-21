const rightSideComplList = document.querySelector(".rightSide__complList");
let rightSideArray = [];

function complTodo(event) {    
    const inputValue = event.target.parentElement.firstChild;
    const complSpan = document.createElement("span");
    rightSideComplList.appendChild(complSpan);
    complSpan.innerText = inputValue.innerText;
    // 화면 상에 체크 눌렀던 Input값이 rightSide에 표시되게끔..

    const resistComplToDo = {
        text: inputValue.innerText,
        id: inputValue.id,
    };
    rightSideArray.push(resistComplToDo);
    localStorage.setItem("completeToDo", JSON.stringify(rightSideArray));

    deleteTodo(event);
}

// id값은 어떻게 구해야 할까?
// f5 눌러도 completeToDo_KEY에 남아있는 값이 보존되도록