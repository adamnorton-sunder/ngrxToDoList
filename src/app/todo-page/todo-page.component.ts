import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, loadTodos } from '../state/actions/todo.actions';
import { ToDo } from '../state/reducers/todo.reducer';
import { selectAllTodos } from '../state/selectors/todo.selectors';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent  implements OnInit {

  // public allToDos = this.store.select(selectAllTodos);
  public toDoTitle: string = '';

  constructor(
    private store: Store,
  ) { }

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addToDo() {
    console.log('Add ToDo Button Clicked')
    this.store.dispatch(addTodo({ title: this.toDoTitle }));
    this.toDoTitle = '';
  }

}
