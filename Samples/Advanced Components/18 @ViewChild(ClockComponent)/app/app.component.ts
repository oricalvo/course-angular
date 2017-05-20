import {
    Compiler, Component, HostBinding, NgModule, ViewEncapsulation, ViewContainerRef, ViewChild,
    ElementRef, PlatformRef, Inject, PLATFORM_ID
} from "@angular/core";
import {Router} from "@angular/router";
import {CommonModule, isPlatformBrowser} from "@angular/common";
import {ContactService} from "./contact.service";
import {BrowserDomAdapter} from "@angular/platform-browser/src/browser/browser_adapter";
import {ClockComponent} from "./clock.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    @ViewChild(ClockComponent) clock: ClockComponent;
    showClock: boolean;

    toggle() {
        this.showClock = !this.showClock;
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");

        console.log(this.clock);
    }
}

