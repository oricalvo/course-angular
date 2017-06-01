import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild,
    ViewContainerRef
} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    counter: number = 0;

    constructor(private cdr: ChangeDetectorRef) {
    }

    detach() {
        this.cdr.detach();
    }

    attach() {
        this.cdr.reattach();
    }

    inc() {
        ++this.counter;
    }
}

