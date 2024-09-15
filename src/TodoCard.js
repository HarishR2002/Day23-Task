import React, { useState } from 'react';

const TodoCard = ({ todo, deleteTodo, editTodo, changeStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({ name: todo.name, description: todo.description });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editTask);
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editTask.name} 
            onChange={(e) => setEditTask({ ...editTask, name: e.target.value })}
          />
          <textarea 
            value={editTask.description} 
            onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{todo.name}</h3>
          <p>{todo.description}</p>
          <p>Status: {todo.status}</p>
          <button onClick={() => changeStatus(todo.id, todo.status === 'completed' ? 'not completed' : 'completed')}>
            Change Status
          </button>
        </>
      )}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;
