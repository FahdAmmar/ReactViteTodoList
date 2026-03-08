// src/reducers/todosReducer.ts

import { Todo, TodoAction, FilterType } from '../types/types'

// دالة مساعدة لحفظ البيانات في localStorage
const saveToLocalStorage = (todos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(todos));
};

// الحالة الأولية
export const initialState: { todos: Todo[]; filter: FilterType } = {
    todos: [],
    filter: 'all',
};

// دالة الـ Reducer
export const todosReducer = (
    state: typeof initialState,
    action: TodoAction
): typeof initialState => {
    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload };

        case 'ADD_TODO':
            const newTodos = [...state.todos, action.payload];
            saveToLocalStorage(newTodos);
            return { ...state, todos: newTodos };

        case 'DELETE_TODO':
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
            saveToLocalStorage(filteredTodos);
            return { ...state, todos: filteredTodos };

        case 'TOGGLE_TODO':
            const toggledTodos = state.todos.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
            saveToLocalStorage(toggledTodos);
            return { ...state, todos: toggledTodos };

        case 'UPDATE_TODO':
            const updatedTodos = state.todos.map(todo =>
                todo.id === action.payload.id
                    ? { ...todo, title: action.payload.title }
                    : todo
            );
            saveToLocalStorage(updatedTodos);
            return { ...state, todos: updatedTodos };

        case 'FILTER_TODOS':
            return { ...state, filter: action.payload };

        default:
            return state;
    }
};