import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './App.css';
import TodoList from 'remote/TodoList';


const App = () => (
  <div className="App">
    <h3>It is Host Component and it is using remote ToDo list code</h3>
    <TodoList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
