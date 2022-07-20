import { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState(["love", "AA", "frontend"]);
  function removeTodo(index) {
    // Remember to clone into a new array
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <ul className=" todo-list">
      {todoList.map((todo, index) => (
        <li key={todo.id} onClick={() => removeTodo(index)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
