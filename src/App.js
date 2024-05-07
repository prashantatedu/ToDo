import React, { useState } from "react";
import Todo from "./components/Todo";
import "./App.css";
import Todoform from "./components/TodoForm.jsx";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn About React",
      isComplete: false,
    },
    {
      text: "Prepare Breakfast",
      isComplete: false,
    },
    {
      text: "Attend yoga class",
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  const completeTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isComplete = true;
    setTodos(newTodo);
  };

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removedTodo={removeTodo}
          />
        ))}
        <Todoform addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
