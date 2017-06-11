import {Component, ElementRef, ViewChild} from "@angular/core";
import {FormControl, NgForm, NgModel} from "@angular/forms";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];
    name: string;

    @ViewChild("nameNgModel") nameNgModel: NgModel;
    @ViewChild("form") form: NgForm;

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    add() {
      console.log(this.form);

      if(!this.form.invalid) {
        return;
      }
    }
}

export interface Contact {
    id: number;
    name: string;
}


export class AppComponent {
  @ViewChild("form") form: NgForm;

  add() {
    if(!this.form.invalid) {
      return;
    }
  }
}
