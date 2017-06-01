import {
  ApplicationRef, Component, HostBinding, Inject, Injectable, InjectionToken, Injector,
  PlatformRef
} from '@angular/core';
import {MyService} from "./MyService";

@Injectable()
class ComponentRefService {
  component: DialogComponent;
}

export interface DialogService {
  close();
}

export const DialogServiceToken = new InjectionToken<DialogService>("DialogService");

@Injectable()
class DialogServiceImpl implements DialogService {
  component: DialogComponent;

  close() {
    this.component.close();
  }
}

@Component({
  selector: "my-dialog",
  moduleId: module.id,
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
  providers:[
      //{provide: DialogServiceToken, useClass: DialogServiceImpl},
  ],
  viewProviders: [
      {provide: DialogServiceToken, useClass: DialogServiceImpl},
  ]
})
export class DialogComponent {
  @HostBinding("style.visibility") visibility: string;

  constructor(@Inject(DialogServiceToken) service: DialogService) {
    this.visibility = "hidden";

    (service as DialogServiceImpl).component = this;
  }

  show() {
    this.visibility = "visible";
  }

  close() {
    this.visibility = "hidden";
  }
}
