import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item-renderer',
  template: `
  <style>
    .complete {
      text-decoration: line-through;
    }
  </style>
  <span [ngClass]="todo.status"> {{ todo.title }} </span>
    <button (click)="toggle.emit(todo)">Toggle</button>`
})
export class TodoItemRenderer {
  @Input() todo; //todo is an input
  @Output() toggle = new EventEmitter(); 
}
