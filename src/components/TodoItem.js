import React from "react";
import "./TodoItem.css";

const TodoItem = ({ task, index, onToggleComplete, onDelete }) => (
  <div
    className={`todo-item ${task.completed ? "completed" : ""}`}
    style={{ animationDelay: `${index * 0.2}s` }}
  >
    <div className="todo-text">{task.text}</div>
    <div className="todo-actions">
      {/* Completed Button */}
      <button
        className="completed-btn"
        onClick={() => onToggleComplete(task.id)}
      >
        {task.completed ? "Undo" : "Completed"}
      </button>

      {/* Remove Button */}
      <button className="remove-btn" onClick={() => onDelete(task.id)}>
        Remove
      </button>
    </div>
  </div>
);

export default TodoItem;
