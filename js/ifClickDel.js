function leftSideDeleteTodo(event) {
    const li = event.target.parentElement;
    leftSideArray = leftSideArray.filter((todo) => li.id !== JSON.stringify(todo.id));
    li.remove();     
    saveMyToDo(); 
}

function rightSideDeleteTodo(event) {
    const li = event.target.parentElement.parentElement;
    rightSideArray = rightSideArray.filter((todo) => li.id !== todo.id);
    li.remove();
    saveComplToDo();
}