const getInput = document.querySelector(".progressing-form input");

getInput.addEventListener("click", ifMousefocus);

function ifMousefocus(event) {  
    if (event.type === 'click') {
        getInput.placeholder = "";
    }
}
