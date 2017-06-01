import {Component, isDevMode} from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
console.log("isDevMode", isDevMode());
  }
}

import {Component, isDevMode} from '@angular/core';

console.log("isDevMode", isDevMode());
