import { createReducer, on } from "@ngrx/store";
import { addTodo } from "../actions/todo.actions";

export interface ToDoState {
    todos: ToDo[],
    error: string | null,
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: ToDoState = {
    todos: [],
    error: null,
    status: 'pending'
}

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { title }) => ({
        ...state,
        todos: [...state.todos, { id: Date.now().toString(), title: title, isCompleted: false}]
    }))
)

export interface ToDo {
    id: string,
    title: string,
    isCompleted: boolean,
    dueDate?: Date,
    timeInvested?: number,
}