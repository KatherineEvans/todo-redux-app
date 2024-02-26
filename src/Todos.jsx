import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <h1>All todos</h1>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
