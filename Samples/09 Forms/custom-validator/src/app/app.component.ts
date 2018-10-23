import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidationErrors, ValidatorFn} from '@angular/forms/src/directives/validators';
import {AbstractControl} from '@angular/forms/src/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formGroup: FormGroup;

  constructor(builder: FormBuilder) {
    this.formGroup = builder.group({
      userName: ["", [
        Validators.required,
      ], [
        range(10, 100),
      ]
      ]
    });

    this.formGroup.statusChanges.subscribe(s => {
      console.log(s);
    });
  }

  save() {
    console.log(this.formGroup.valid);
  }
}

function range(from: number, to: number): ValidatorFn {
  return function (control: AbstractControl): ValidationErrors | null {
    console.log("validate");

    return new Promise(resolve => {
      if (control.value < from || control.value >= to) {
        resolve({
          range: true,
        });
      }
    });
  }
}
