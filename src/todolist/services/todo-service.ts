import { Injectable } from '@angular/core';
import { TodoModel } from '../models/todo-model';

@Injectable()
export class TodoService {
    todos = [
        new TodoModel('1'),
        new TodoModel('2'),
        new TodoModel('3'),
    ];
    
    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    };
    
    toggleTodo(todo: TodoModel) {
        todo.toggle();
        const idx = this.todos.indexOf(todo);
        this.todos = [
            ...this.todos.slice(0, idx),
            todo,
            ...this.todos.slice(idx + 1),
        ];
    };
};