import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EdithTodoForm from "./EdithTodoForm";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  //   const uuidv4 = uuidv4();

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const editTodoTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todolist"));
    if (storedTodos) {
      setTodos(storedTodos);

      console.log("list of to do list", st)
    }
  }, []);

  return (
    <div className="TodoWrapper">
      <h2 style={{ color: "white" }}>Get things Done!</h2>

      <TodoForm addTodo={addTodo} />

      {todos.map((task) => {
        return task.isEditing ? (
          <EdithTodoForm task={task} editTodoTask={editTodo} />
        ) : (
          <Todo
            task={task}
            key={task.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodoTask={editTodoTask}
          />
        );
      })}
    </div>
  );
};

export default TodoWrapper;
