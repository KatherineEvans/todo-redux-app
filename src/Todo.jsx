import { useDispatch } from "react-redux";
import { toggleToDo } from "./store/slice";

export function Todo(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="relative flex items-start mb-3">
        <div className="flex h-6 items-center">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            checked={props.todo.completed}
            onChange={() => dispatch(toggleToDo(props.todo))}
            className="checkbox"
          />
        </div>
        <div className="ml-3 leading-6">
          <label
            htmlFor="comments"
            className={"font-medium text-gray-900" + (props.todo.completed ? " line-through" : "")}
          >
            {props.todo.text}
          </label>
        </div>
      </div>
    </div>
  );
}
