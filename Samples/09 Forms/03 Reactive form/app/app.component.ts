import {Component, ViewChild} from "@angular/core";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  moduleId: module.id,
})
export class AppComponent {
  contacts: Contact[];
  formGroup: FormGroup;

  constructor(builder: FormBuilder) {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];

    this.formGroup = builder.group({
      name: ["", [
          Validators.required,
          Validators.maxLength(5),
        ]
      ]
    });

    this.formGroup.valueChanges.subscribe(value => {
      console.log("valueChanges", value);
    });
  }

  add() {
    if(!this.formGroup.valid) {
      console.log("Not valid", this.formGroup.value);

      return;
    }

    console.log("Saving ...", this.formGroup.value);
  }

change() {
  this.formGroup.setValue({
    name: "XXX"
  });

  this.formGroup.controls.name.setValue("XXX");
}
}

export interface Contact {
  id: number;
  name: string;
}
