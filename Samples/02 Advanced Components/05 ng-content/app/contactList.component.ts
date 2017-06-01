import {Component, ViewEncapsulation} from "@angular/core";
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
        console.log("ContactList.ctor");

        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    ngOnDestroy() {
        console.log("ContactList.dtor");
    }
}

export interface Contact {
    id: number;
    name: string;
}
