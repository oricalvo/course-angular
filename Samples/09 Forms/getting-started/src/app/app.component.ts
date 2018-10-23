import {Component, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  @ViewChild("inputName") inputName: NgModel;

  constructor() {
  }

  ngOnInit() {
    console.log("inputName", this.inputName);
  }
}
