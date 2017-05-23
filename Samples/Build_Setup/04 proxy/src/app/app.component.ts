import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  contacts: Contact[];

  constructor(private http: Http) {
    console.log(environment.name);
  }

  ngOnInit() {
    this.http.get("/api/contact").map(res=>res.json()).subscribe(contacts => {
      this.contacts = contacts;
    });
  }
}

export interface Contact {
    id: number;
    name: string;
}

