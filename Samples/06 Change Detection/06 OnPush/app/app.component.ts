import {ChangeDetectionStrategy, Component, ElementRef} from "@angular/core";
import {Contact} from "./contact-list.component";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    moduleId: module.id,
})
export class AppComponent {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    change() {
        this.contacts.push({id:3, name: "Udi"});
    }
}
