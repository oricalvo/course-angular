import {ApplicationRef, Component, Injector, PlatformRef, ViewChild} from '@angular/core';
import {MyService} from "./MyService";
import {DialogComponent} from "./dialog.component";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("dialog") dialog: DialogComponent;

  constructor() {
  }

  about() {
    this.dialog.show();
  }
}
