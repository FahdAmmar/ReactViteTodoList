// src/App.tsx

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { TodosProvider } from './contexts/TodosContext';

const App: React.FC = () => {
  return (
    <TodosProvider>
      <div className="App min-h-screen flex items-center justify-center">
        <TodoList />
      </div>
    </TodosProvider>
  );
};

export default App;