const prgForm = document.querySelector(".progressing-form");
const prgInput = document.querySelector(".progressing-form input");
const prgList = document.querySelector(".progressing-top-list");
const prgArray = [];

prgForm.addEventListener("submit", handlePrgSubmit);

function handlePrgSubmit(event){
    event.preventDefault();
    const myToDo = prgInput.value ;    
    prgInput.value = "";
        
    moveValueToList(myToDo);
}

function moveValueToList(myToDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = myToDo;
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    prgList.appendChild(li);
    button.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // btn의 부모 li를 const li로 지정.
    li.remove();
}

