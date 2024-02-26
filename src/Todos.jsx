import { useSelector, useDispatch } from "react-redux";
import { Todo } from "./Todo";
import { addToTodos } from "./store/slice";
import { useState } from "react";

export function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const [todoText, setTodoText] = useState("Do the dishes");

  return (
    <div>
      <h1>All todos</h1>
      <div>
        <label>Add Todo:</label>
        <input value={todoText} onChange={(event) => setTodoText(event.target.value)} type="text" />
        <button>Add</button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
