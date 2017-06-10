import {Component, ElementRef} from "@angular/core";

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
            {id: 1, name: "Ori", selected: true},
            {id: 2, name: "Roni", selected: false},
        ];
    }

    select(contact) {
        contact.selected = !contact.selected;
    }
}

export interface Contact {
    id: number;
    name: string;
    selected: boolean;
}


