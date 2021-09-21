const rightSideComplList = document.querySelector(".rightSide__complList");

function complTodo(event) {
    const complLi = document.createElement("li");
    const complSpan = document.createElement("span");
    complLi.appendChild(complSpan);
    rightSideComplList.appendChild(complLi);

    // event는 complBtn이잖아
}