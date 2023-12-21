import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Todo = ({ task, toggleComplete, deleteTodo, editTodoTask }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>

      <div>
        <FaRegEdit onClick={() => editTodoTask(task.id)} />
        &nbsp;
        <FaRegTrashAlt onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
