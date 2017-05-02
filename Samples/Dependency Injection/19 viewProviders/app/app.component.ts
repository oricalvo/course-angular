import {ApplicationRef, Component, Injector, PlatformRef} from '@angular/core';
import {MyService} from "./MyService";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor() {
  }
}
