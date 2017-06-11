import {Component, ElementRef, forwardRef, Inject, Injectable, Self, SkipSelf, ViewChild} from "@angular/core";
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm, NgModel} from "@angular/forms";

export const PROVIDERS = [
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=> EmailComponent),
    multi: true
  },
];

@Component({
    selector: "my-email",
    templateUrl: "./email.component.html",
    styleUrls: ["./email.component.css"],
    moduleId: module.id,
    providers: [PROVIDERS]
})
export class EmailComponent implements ControlValueAccessor {
  email: string;
  onChange: any;
  onTouched: any;

  constructor() {
    console.log("EmailComponent");
  }

  writeValue(obj: any): void {
    console.log("writeValue", obj);
    this.email = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  reset() {
    this.email = "";
    this.onChange(this.email);
  }

  validate(control: FormControl) {
    console.log("validate", control);

    control.setErrors({required: true}, true);
  }
}

export interface ControlValueAccessor {
  writeValue(obj: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
}

export const VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EmailComponent),
  multi: true
};
