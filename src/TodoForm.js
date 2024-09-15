import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      addTodo({
        taskName,
        taskDescription,
        status: 'not completed'
      });
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <textarea 
        placeholder="Task Description" 
        value={taskDescription} 
        onChange={(e) => setTaskDescription(e.target.value)} 
        rows="1"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
