import {ApplicationRef, Component, Injector, OnDestroy, PlatformRef} from '@angular/core';
import {MyService} from "./MyService";

@Component({
  selector: "my-clock",
  moduleId: module.id,
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent implements OnDestroy {
  constructor(service: MyService) {
    console.log("clock.ctor");
  }

  ngOnDestroy() {
    console.log("clock.dtor");
  }
}
