import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "my-contact-list",
    templateUrl: "./contactList.component.html",
    styleUrls: ["./contactList.component.css"],
    moduleId: module.id,
})
export class ContactListComponent {
    contacts: Contact[];

    constructor() {
        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }
}

export interface Contact {
    id: number;
    name: string;
}
