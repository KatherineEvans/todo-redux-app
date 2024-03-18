import { useSelector, useDispatch } from "react-redux";
import { Todo } from "./Todo";
import { addToTodos } from "./store/slice";
import { useState } from "react";

export function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [todoText, setTodoText] = useState("");

  const handleAdd = () => {
    if (todoText === "") {
      return;
    }

    // dispatches an action to add a todo using the store function
    dispatch(
      addToTodos({
        id: todos.length + 1,
        text: todoText,
        completed: false,
      })
    );

    setTodoText("");
  };

  return (
    <div>
      <h1 className="text-2xl underline text-center mb-3">All todos</h1>
      <div className="float-right">
        <label className="block text-sm font-medium leading-6 text-gray-900">Add Todo:</label>
        <input
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          type="text"
          className="input-text-field"
        />
        <button onClick={handleAdd} className="btn-primary">
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
