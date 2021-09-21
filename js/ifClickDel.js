function deleteTodo(event) {
    const li = event.target.parentElement;
    leftSideArray = leftSideArray.filter((todo) => li.id !== JSON.stringify(todo.id));
    li.remove();     
    saveMyToDo(); 
    // 삭제 버튼을 누를 시, 그 li의 id값을 확인할 수 있네!
}