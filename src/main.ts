import { bootstrap } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { provideStore } from '@ngrx/store';
import { clock, people} from './reducers';

bootstrap(App, [provideStore({ clock, people })]).then(
  () => console.log('App running'),
  err => console.log(err));
