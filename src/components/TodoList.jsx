import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onToggle={() => toggleTodo(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;