import { Component } from '@angular/core';
import {AppState} from './app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.counter = this.store.select("counter");
  }

  inc() {
    this.store.dispatch({
      type: "INC",
    })
  }

  dec() {
    this.store.dispatch({
      type: "DEC",
    })
  }

  login() {
    this.store.dispatch({
      type: "LOGIN",
      userName: "oric",
    })
  }
}
