import { createSelector, State } from "@ngrx/store"
import { AppState } from "../app.state"
import { ToDoState } from "../reducers/todo.reducer";


export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
    selectTodos,
    (state: ToDoState) => state.todos
)