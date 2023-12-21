import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const onChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Show warning if inputValue is empty, hide it otherwise
    setShowWarning(inputValue === "");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
      setShowWarning(false);
    } else {
      // If value is empty, show the warning
      setShowWarning(true);
    }
  };

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={onChange}
      />

      <button type="submit" className="todo-btn">
        Create Task
      </button>
      {showWarning && (
        <div style={{ color: "red" }}>Add a value before submitting</div>
      )}
    </form>
  );
};

export default TodoForm;
