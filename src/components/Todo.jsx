import React from "react";

const Todo = ({ todo, index, completeTodo, removedTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removedTodo(index)}>X</button>
    </div>
  );
};

export default Todo;
