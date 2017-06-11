import {Component, ViewChild} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  moduleId: module.id,
})
export class AppComponent {
  contacts: Contact[];
  formGroup: FormGroup;

  constructor(private builder: FormBuilder) {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
    ];

    this.formGroup = builder.group({
      name: ["", [
        Validators.required,
        Validators.maxLength(5),
        validate,
      ]
      ]
    });

    this.formGroup.valueChanges.subscribe(value => {
      console.log("valueChanges", value);
    });
  }

  add() {
    if (!this.formGroup.valid) {
      console.log("Not valid", this.formGroup.errors);

      return;
    }

    console.log("Saving ...", this.formGroup.value);
  }

  change() {
    this.formGroup = this.builder.group({
      name: ["", [
        Validators.required,
      ]
      ]
    });
  }
}

export interface Contact {
  id: number;
  name: string;
}

function validate(control:FormControl):{[key:string]:boolean} {
  if(control.value == "11111") {
    return null;
  }

  return {'xxx': true};
}
