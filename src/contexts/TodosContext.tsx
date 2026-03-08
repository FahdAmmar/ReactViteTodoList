// src/contexts/TodosContext.tsx

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { TodosContextType, TodoAction, FilterType, Todo } from '../types/types';
import { todosReducer, initialState } from '../reducers/TodoReducer';

// إنشاء الـ Context مع نوع محدد
const TodosContext = createContext<TodosContextType | undefined>(undefined);

// Props للـ Provider
interface TodosProviderProps {
    children: ReactNode;
}

export const TodosProvider: React.FC<TodosProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(todosReducer, initialState);

    // تحميل البيانات من localStorage عند البدء
    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            try {
                const parsedTodos: Todo[] = JSON.parse(storedTodos);
                dispatch({ type: 'SET_TODOS', payload: parsedTodos });
            } catch (error) {
                console.error('Failed to parse todos from localStorage:', error);
            }
        }
    }, []);

    // دوال مساعدة (Selectors)
    const filteredTodos = state.todos.filter(todo => {
        if (state.filter === 'com') return todo.completed;
        if (state.filter === 'noncom') return !todo.completed;
        return true;
    });

    return (
        <TodosContext.Provider value={{
            todos: filteredTodos,
            dispatch,
            filter: state.filter
        }}>
            {children}
        </TodosContext.Provider>
    );
};

// Custom Hook لاستخدام الـ Context بأمان
export const useTodos = (): TodosContextType => {
    const context = useContext(TodosContext);
    if (!context) {
        throw new Error('useTodos must be used within a TodosProvider');
    }
    return context;
};

export { TodosContext };