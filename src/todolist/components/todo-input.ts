import { Component } from '@angular/core';
import { TodoService } from '../services/todo-service';
import { TodoModel } from '../models/todo-model';

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" [(ngModel)]="todoModel.title">
    <button (click)="onClick()"> Clicky </button>
    </div>`,
})
export class TodoInput {
    todoModel: TodoModel = new TodoModel();;
    constructor(public todoService: TodoService) { //public keyword is sick!
        console.log(todoService);
    }
    
    onClick() {
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService.todos);
        this.todoModel = new TodoModel();
    }
}