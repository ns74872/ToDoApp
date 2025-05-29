import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      onClick={onToggle}
      className="flex items-center justify-between border px-3 py-2 rounded cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          // readOnly
          className="w-5 h-5 pointer-events-none"
        />
        <span className={todo.completed ? "text-gray-500" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent toggle when clicking delete
          onDelete();
        }}
        className="text-red-500 font-bold"
      >
        X
      </button>
    </li>
  );
}

export default TodoItem;
