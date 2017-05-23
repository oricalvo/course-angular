import {Component, isDevMode} from '@angular/core';
import {environment} from '../environments/environment';
import {Http} from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works! 123';

  constructor(http: Http) {
    console.log('isDevMode', isDevMode());

    http.get("assets/contacts.json").map(res=>res.json()).subscribe(contacts => {
      console.log(contacts);
    })
  }
}
