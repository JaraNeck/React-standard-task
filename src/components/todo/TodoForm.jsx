const TodoForm = ({ setTodos }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    // 비동기컴포넌트
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const content = formData.get("content");

    if (!title.trim() || !content.trim())
      // 공백제거
      return alert("제목과 내용을 입렵하세요");

    const nextTodo = {
      id: crypto.randomUUID(), //유니크한 id
      title,
      content,
      isDone: false,
    };

    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="제목" name="title" />
        <input type="text" placeholder="내용" name="content" />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
