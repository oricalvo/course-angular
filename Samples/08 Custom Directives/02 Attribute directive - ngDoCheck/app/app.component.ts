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
            {id: 1, name: "Ori", options: {selected: true}},
            {id: 2, name: "Roni", options: {selected: false}},
        ];
    }

    select(contact) {
        contact.options.selected = !contact.options.selected;

        // if(contact.options.active) {
        //     delete contact.options.active;
        // }
        // else {
        //     contact.options.active = true;
        // }
    }
}

export interface Contact {
    id: number;
    name: string;
    options: any;
}
