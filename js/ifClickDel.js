function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();  
    console.log(li.id);
    // 삭제 버튼을 누를 시, 그 li의 id값을 확인할 수 있네!
}