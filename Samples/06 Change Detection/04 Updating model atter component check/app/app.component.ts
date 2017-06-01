import {ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewContainerRef} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    counter: number = 0;
    condition: boolean = false;

ngAfterViewChecked() {
    if(this.condition) {
        ++this.counter;
    }
}

    none() {
        this.condition = !this.condition;
    }
}

