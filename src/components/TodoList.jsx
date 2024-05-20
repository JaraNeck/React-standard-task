import TodoItem from "./TodoItem";

const todoList = ({ title, todos, setTodos }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {todos.map((todo) => (
          // 키는 알아볼수 있도록
          <li key={todo.id}>
            <TodoItem todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default todoList;
