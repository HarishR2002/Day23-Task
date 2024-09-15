import React, { useState } from 'react';
import TodoList from './TodoList';  
import TodoForm from './TodoForm';  
import Filter from './Filter';  
import './style.css';  // Import the stylesheet

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, status: 'not completed', id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, updatedTask) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, ...updatedTask } : todo));
  };

  const changeStatus = (id, status) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'completed' ? todo.status === 'completed' :
    filter === 'not completed' ? todo.status === 'not completed' :
    true
  );

  return (
    <div className="container">
      <h1>Todo App</h1>

      {/* Form to add todos */}
      <TodoForm addTodo={addTodo} />

      {/* Todo and Filter Header */}
      <div className="header">
        <div className="todo-list">
          <TodoList 
            todos={filteredTodos} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
            changeStatus={changeStatus} 
          />
        </div>
        <div className="filter">
          <Filter setFilter={setFilter} />
        </div>
      </div>
    </div>
  );
};

export default App;
