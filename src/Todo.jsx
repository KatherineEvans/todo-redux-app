export function Todo(props) {
  return (
    <div>
      <p>{props.todo.text}</p>
      <small>{props.todo.status}</small>
    </div>
  );
}
