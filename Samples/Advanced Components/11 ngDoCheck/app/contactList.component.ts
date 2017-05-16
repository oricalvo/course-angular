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
        console.log("contactList: ctor");

        this.contacts = [
            {"id": 1, "name": "Ori"},
            {"id": 2, "name": "Roni"},
        ];
    }

    change() {
        this.contacts[0] = {"id": 1, "name": "OriX"};
        this.contacts[1].name += "X";
    }
}

export interface Contact {
    id: number;
    name: string;
}
