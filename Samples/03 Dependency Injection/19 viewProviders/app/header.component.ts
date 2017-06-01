import {ApplicationRef, Component, Injector, PlatformRef} from '@angular/core';
import {MyService} from "./MyService";

@Component({
  selector: "my-header",
  moduleId: module.id,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  viewProviders:[
      MyService
  ]
})
export class HeaderComponent {
  constructor() {
  }
}
