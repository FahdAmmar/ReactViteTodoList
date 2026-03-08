// src/types/index.ts

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export type FilterType = 'all' | 'com' | 'noncom';

// أنواع الإجراءات (Actions) للـ Reducer
export type TodoAction =
    | { type: 'ADD_TODO'; payload: Todo }
    | { type: 'DELETE_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: string }
    | { type: 'UPDATE_TODO'; payload: { id: string; title: string } }
    | { type: 'SET_TODOS'; payload: Todo[] }
    | { type: 'FILTER_TODOS'; payload: FilterType };

// نوع حالة الـ Context
export interface TodosContextType {
    todos: Todo[];
    dispatch: React.Dispatch<TodoAction>;
    filter: FilterType;
}