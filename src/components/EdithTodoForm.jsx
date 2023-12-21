import React, { useState } from "react";

const EdithTodoForm = ({ editTodoTask, task }) => {
  const [value, setValue] = useState(task.task);

  const onSubmit = (e) => {
    e.preventDefault();

    editTodoTask(value, task.id);
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" className="todo-btn">
        update
      </button>
    </form>
  );
};

export default EdithTodoForm;
