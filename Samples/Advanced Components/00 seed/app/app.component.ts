import {
    Compiler, Component, HostBinding, NgModule, ViewEncapsulation, ViewContainerRef, ViewChild,
    ElementRef, PlatformRef
} from "@angular/core";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ContactService} from "./contact.service";
import {BrowserDomAdapter} from "@angular/platform-browser/src/browser/browser_adapter";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    button;
    onClickHandler;

    constructor(private elementRef: ElementRef) {

        new BrowserDomAdapter();

        const dom = elementRef.nativeElement;

        this.button = document.createElement("button");
        this.button.innerText = "Click me";
        this.onClickHandler = this.onClick.bind(this);
        this.button.addEventListener("click", this.onClickHandler);

        dom.append(this.button);
    }

    onClick() {
        console.log("clicked", this);

        this.button.removeEventListener("click", this.onClickHandler);
    }
}
