import {bootstrap} from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { TodoInput } from './components/todo-input';
import { TodoService } from './services/todo-service';
import { TodoList } from './components/todo-list';

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList],
  template: `<div>
    <todo-input></todo-input>
    <todo-list></todo-list>
    </div>`
})
class App {}

bootstrap(App, [TodoService]);
