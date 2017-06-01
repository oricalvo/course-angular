import {ApplicationRef, Component, Inject, Injector, OnDestroy, PlatformRef} from '@angular/core';
import {MyService} from "./MyService";
import {DialogService, DialogServiceToken} from "./dialog.component";

@Component({
  selector: "my-clock",
  moduleId: module.id,
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent implements OnDestroy {
  constructor(@Inject(DialogServiceToken) private dialog: DialogService) {
    console.log("clock.ctor");
  }

  ngOnInit() {
    setTimeout(()=> {
      this.dialog.close();
    }, 1500);
  }

  ngOnDestroy() {
    console.log("clock.dtor");
  }
}
