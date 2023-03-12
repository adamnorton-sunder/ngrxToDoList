import { createAction, props } from "@ngrx/store";

// Load ToDos Action
export const loadTodos = createAction('[To-Do] Load To-Dos');

// Create the action
export const addTodo = createAction(
    '[To-Do] Add To-Do',
    props<{ title: string }>()
)