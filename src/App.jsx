import React from 'react';
import './App.css';

//components
import TodoList from './components/TodoList';

// import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function App() {
  return (
    <div  className="App min-h-screen items-center justify-center ">
      <TodoList />
    </div>
  );
}
