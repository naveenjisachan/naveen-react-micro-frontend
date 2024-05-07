import React, { useState, useEffect } from 'react';
import Input from '../common/input/Input';
import Button from '../common/button/Button';
import List from '../common/list/List';
import './TodoList.css';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-container">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a new todo..."
        className="todo-input"
      />
      <Button onClick={handleAddTodo} className="todo-button todo-button-primary">
        Add Todo
      </Button>
      <div className="filter-buttons">
        <Button
          onClick={() => setFilter('all')}
          className={`todo-button ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter('active')}
          className={`todo-button ${filter === 'active' ? 'active' : ''}`}
        >
          Active
        </Button>
        <Button
          onClick={() => setFilter('completed')}
          className={`todo-button ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed
        </Button>
      </div>
      <List>
        {filteredTodos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(index)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
          </li>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
