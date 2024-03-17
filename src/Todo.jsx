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
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          />
        </div>
        <div className="ml-3 leading-6">
          {/* <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}> */}
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
