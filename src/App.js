import React, { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import "./App.css";

const App = () => {
  const defaultTasks = [
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Complete React project", completed: true },
    { id: 3, text: "Read a book", completed: false },
  ];

  const [tasks, setTasks] = useState(defaultTasks);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <div className="todo-container">
        <div className="todo-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={handleAddTask}>Add</button>
        </div>

        <div className="todo-list">
          {tasks.map((task, index) => (
            <TodoItem
              key={task.id}
              task={task}
              index={index}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
