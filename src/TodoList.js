import React from 'react';

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <h3>{todo.taskName}</h3>
            <p>{todo.taskDescription}</p>
            <p className="card-status">Status: {todo.status}</p>
          </div>
          <div className="card-actions">
            <button className="edit" onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
