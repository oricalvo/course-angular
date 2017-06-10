import {Component, TemplateRef, ViewChild} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    items: any[];

    constructor() {
        this.items = ['Ori','Roni','Udi'];
    }

    refresh() {
        this.items = [
            'Ori-X',
            'Roni-X',
            'Udi-X'
        ];
    }
}
