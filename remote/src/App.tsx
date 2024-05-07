import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoList from './components/todo-list/TodoList';
import './index.css'
import './App.css';

const App = () => (
  <div className="App">
    <h3>It is Remote Component which contains Actual ToDo List code</h3>
    <TodoList />
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
