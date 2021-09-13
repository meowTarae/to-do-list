const getInput = document.querySelector(".leftSide__form input");

getInput.addEventListener("focus", ifMousefocus);
getInput.addEventListener("blur", ifMouseblur);

function ifMousefocus(event) {  
    if (event.type === 'focus') {
        getInput.placeholder = "";
    }
}
function ifMouseblur(event) {  
    if (event.type === 'blur') {
        getInput.placeholder = "Input What-You-Do";
    }
}
