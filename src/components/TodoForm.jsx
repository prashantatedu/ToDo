import React, { useState } from "react";

const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form id="todoform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="todotask"
          value={value}
          placeholder="Add todos..."
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </form>
    </div>
  );
};

export default Todoform;
