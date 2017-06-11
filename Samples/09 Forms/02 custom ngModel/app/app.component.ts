import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  moduleId: module.id,
})
export class AppComponent {
  contacts: Contact[];
  email: string;
  @ViewChild("form") form: NgForm;

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];

    this.email = "ori@gmail.com";
  }

  log() {
    console.log("email is:", this.email);
  }

  change() {
    this.email = "ori@gmail.com.x"
  }
}

export interface Contact {
  id: number;
  name: string;
}


export class NgModelGroupComp {
  name = {first: 'Nancy', last: 'Drew'};

  onSubmit(f: NgForm) {
    console.log(f.value);  // {name: {first: 'Nancy', last: 'Drew'}, email: ''}
    console.log(f.valid);  // true
  }

  setValue() { this.name = {first: 'Bess', last: 'Marvin'}; }
}
