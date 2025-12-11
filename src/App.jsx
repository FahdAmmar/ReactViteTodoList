import React from 'react';
import './App.css';

//components
import TodoList from './components/TodoList';
import { TodosContext } from './contexts/TodosContext';
import { useState } from 'react';

//uuid library
import { v4 as uuid } from 'uuid';



const initain = [
  { id: uuid(), title: "learn mui", completed: false },
  { id: uuid(), title: "learn tailwind", completed: false },
  { id: uuid(), title: "learn react", completed: false },]


export default function App() {
  const [todos, setTodos] = useState(initain);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <div className="App min-h-screen items-center justify-center ">
        <TodoList />
      </div>
    </TodosContext.Provider>
  );
}
